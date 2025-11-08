import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotChat } from "@copilotkit/react-ui";

export default function Home() {
  return (
    <CopilotKit publicApiKey="ck_pub_08367883247b9211900519383e2eafca">
      <CopilotChat
    instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
    labels={{
      title: "Your Assistant",
      initial: "Hi! 👋 How can I assist you today?",
    }}
  />
  
      </CopilotKit>
  );
}
