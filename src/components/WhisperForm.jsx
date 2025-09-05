export default function WhisperForm({ onSubmit, disabled }) {
  const [text, setText] = Devvit.useState('');
  const [submitted, setSubmitted] = Devvit.useState(false);

  return (
    <vstack gap="small" background="surface" padding="medium" border="thin" cornerRadius="medium">
      <hstack gap="small">
        <icon name="sound-off" />
        <text weight="bold">Whisper (anonymous)</text>
      </hstack>
      <text size="small">Only the system will see your answer.</text>
      {!disabled ? (
        <>
          <text-input
            placeholder="Type your secret..."
            value={text}
            oninput={(e) => setText(e.value)}
            disabled={submitted}
          />
          <button
            disabled={!text.trim() || submitted}
            onPress={async () => {
              setSubmitted(true);
              await onSubmit(text.trim());
            }}
          >
            {submitted ? '📨 Sent!' : 'Send Whisper'}
          </button>
        </>
      ) : (
        <text appearance="dim">You’ve already responded today.</text>
      )}
    </vstack>
  );
}