interface PlayButtonProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlayButton({ isPlaying, setIsPlaying }: PlayButtonProps) {
  return (
    <button
      onClick={() => {
        setIsPlaying(isPlaying => !isPlaying);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect width="32" height="32" fill="#353C51" />
        {isPlaying ? (
          <>
            <rect x="9" y="9" width="5" height="14" fill="#FFFFFE" />
            <rect x="18" y="9" width="5" height="14" fill="#FFFFFE" />
          </>
        ) : (
          <path d="M23.0667 16L10 23V9L23.0667 16Z" fill="#FFFFFE" />
        )}
      </svg>
    </button>
  );
}
