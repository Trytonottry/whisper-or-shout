export default function ShoutForm({ onSubmit, disabled }) {
  const [text, setText] = Devvit.useState('');
  const [shouting, setShouting] = Devvit.useState(false);

  return (
    <vstack gap="small" background="surface" padding="medium" border="thin" cornerRadius="medium">
      <hstack gap="small">
        <icon name="sound-on" color="red" />
        <text weight="bold">Shout (public)</text>
      </hstack>
      <text size="small">Your answer will appear as a comment!</text>
      {!disabled ? (
        <>
          <text-input
            placeholder="Type your bold truth..."
            value={text}
            oninput={(e) => setText(e.value)}
            disabled={shouting}
          />
          <button
            appearance="primary"
            disabled={!text.trim() || shouting}
            onPress={async () => {
              setShouting(true);
              await onSubmit(text.trim());
            }}
          >
            {shouting ? '📢 Shouted!' : 'Shout It!'}
          </button>
        </>
      ) : (
        <text appearance="dim">You’ve already responded today.</text>
      )}
    </vstack>
  );
}