import "./App.css";
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";

function App() {
  return (
    <>
      <SendbirdApp
        appId={"6419EB19-5274-4A82-A194-3AE6D8B8C4BF"}
        userId={"User2"}
        showSearchIcon
        config={{
          userMention: {
            maxMentionCount: 10,
            maxSuggestionCount: 15,
          }
        }}
      />
      <SendbirdProvider
        appId={"6419EB19-5274-4A82-A194-3AE6D8B8C4BF"}
        userId={"User2"}
        isMentionEnabled
        config={{
          userMention: {
            maxMentionCount: 10,
            maxSuggestionCount: 15,
          }
        }}
      />
    </>
  );
}

export default App;
