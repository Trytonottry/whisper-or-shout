export default function StatsDisplay({ stats }) {
  const total = stats.whisperCount + stats.shoutCount;
  const whisperPct = total ? (stats.whisperCount / total) * 100 : 0;
  const shoutPct = 100 - whisperPct;

  return (
    <vstack gap="small" background="overlay" padding="medium" cornerRadius="large">
      <h2>🗳️ Community Response</h2>
      {total === 0 ? (
        <text>No responses yet. Be the first!</text>
      ) : (
        <>
          <hstack gap="small" alignment="middle">
            <text size="small">Whisper: {stats.whisperCount}</text>
            <bar value={whisperPct} max="100" width="100px" />
            <text size="small">{Math.round(whisperPct)}%</text>
          </hstack>
          <hstack gap="small" alignment="middle">
            <text size="small">Shout: {stats.shoutCount}</text>
            <bar value={shoutPct} max="100" width="100px" />
            <text size="small">{Math.round(shoutPct)}%</text>
          </hstack>
          <text size="small">Total: {total}</text>
          {stats.whispers.length > 0 && (
            <vstack gap="x-small">
              <text weight="bold">🔥 Top whispers:</text>
              {stats.whispers.slice(0, 2).map((w, i) => (
                <text key={i} size="small">"{w}"</text>
              ))}
            </vstack>
          )}
        </>
      )}
    </vstack>
  );
}