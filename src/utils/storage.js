export async function loadStats() {
  try {
    const saved = await Devvit.storage.get('stats');
    return saved || null;
  } catch (e) {
    return null;
  }
}

export async function saveStats(data) {
  try {
    await Devvit.storage.put('stats', data);
  } catch (e) {
    console.error('Failed to save stats', e);
  }
}