// src/App.jsx
import { Devvit, UIEventHandler } from '@devvit/public-api';
import Header from './components/Header.jsx';
import WhisperForm from './components/WhisperForm.jsx';
import ShoutForm from './components/ShoutForm.jsx';
import StatsDisplay from './components/StatsDisplay.jsx';
import { loadStats, saveStats } from './utils/storage.js';
import { QUESTIONS } from './utils/questions.js';

// Генерируем ID сессии (на основе даты — например, "2025-09-05")
function getTodayId() {
  const today = new Date();
  return today.toISOString().split('T')[0]; // "2025-09-05"
}

export default function App() {
  const [stats, setStats] = Devvit.useState({ whisperCount: 0, shoutCount: 0, whispers: [], question: '' });
  const [view, setView] = Devvit.useState('main'); // 'main', 'thanks', 'stats'
  const [hasResponded, setHasResponded] = Devvit.useState(false);

  Devvit.useEffect(() => {
    const load = async () => {
      const saved = await loadStats();
      const todayId = getTodayId();

      // Если вопрос устарел — сбрасываем статистику и меняем вопрос
      if (saved.lastUpdated !== todayId) {
        const newQuestion = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
        const freshStats = {
          whisperCount: 0,
          shoutCount: 0,
          whispers: [],
          question: newQuestion,
          lastUpdated: todayId
        };
        await saveStats(freshStats);
        setStats(freshStats);
      } else {
        setStats(saved);
      }

      // Проверяем, отвечал ли пользователь сегодня
      const userResponse = await Devvit.storage.get(`response_${todayId}`);
      if (userResponse) setHasResponded(true);
    };
    load();
  }, []);

  const handleSubmit = async (isShout, text) => {
    if (hasResponded) return;

    const todayId = getTodayId();
    const update = {
      ...stats,
      whisperCount: stats.whisperCount + (isShout ? 0 : 1),
      shoutCount: stats.shoutCount + (isShout ? 1 : 0),
      whispers: isShout ? stats.whispers : [...stats.whispers, text].slice(-50)
    };

    await saveStats(update);
    setStats(update);
    setHasResponded(true);

    if (isShout) {
      await Devvit.http.publishComment({ text: `"${text}" — I would ${stats.question.toLowerCase()}` });
    }

    await Devvit.storage.put(`response_${todayId}`, true);
    setView('thanks');
  };

  return (
    <vstack gap="medium" alignment="center" padding="large">
      <Header />
      {view === 'main' && !hasResponded ? (
        <>
          <h1>{stats.question}</h1>
          <p>Choose: whisper (private) or shout (public)?</p>
          <WhisperForm onSubmit={(text) => handleSubmit(false, text)} disabled={hasResponded} />
          <ShoutForm onSubmit={(text) => handleSubmit(true, text)} disabled={hasResponded} />
          <StatsDisplay stats={stats} />
          <button appearance="outline" onPress={() => setView('stats')}>🔍 View Stats Only</button>
        </>
      ) : view === 'stats' ? (
        <vstack gap="medium" alignment="center">
          <h2>Community Response</h2>
          <StatsDisplay stats={stats} />
          <button onPress={() => setView('main')}>Back</button>
        </vstack>
      ) : (
        <vstack gap="medium" alignment="center">
          <h2>Thanks for participating! 🙊</h2>
          <p>You’ve already responded today. Check back tomorrow!</p>
          <button appearance="outline" onPress={() => setView('stats')}>See Stats</button>
        </vstack>
      )}
    </vstack>
  );
}