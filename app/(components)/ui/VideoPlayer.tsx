type Props = {
    url: string
  }
  
  export default function VideoPlayer({ url }: Props) {
    // Convert full YouTube URL to embed
  
    return (
      <iframe
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-none rounded-md"
      />
    )
  }
  