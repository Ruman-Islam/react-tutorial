import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <button disabled={!isOnline} onClick={handleClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
