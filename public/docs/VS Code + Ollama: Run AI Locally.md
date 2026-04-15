# VS Code + Ollama: Run AI Locally Inside Your Editor (No API, No Limits)

## Why This Is a Big Deal

Let's be honest, it is bigger than it looks. Most developers today rely on:

-   GitHub Copilot
-   ChatGPT
-   Gemini
-   Claude
-   Cloud-based APIs

But they all share one thing: Your code leaves your machine. With Ollama + VS Code integration:

-   ✅ Privacy First: Your code stays local. No external calls.
-   ⚡ Faster Iteration: No latency from APIs. Instant responses.
-   💰 Zero API Cost: Run models like: LLaMA, Mistral, Kimi, Qwen… without paying per token.
-   🧪 Full Control: You choose the model, tweak it, fine-tune it.

## Prerequisites (Quick Setup Checklist)

From the reference docs:

-   Ollama v0.18.3+
-   VS Code 1.113+
-   GitHub Copilot Chat extension 0.41.0+

⚠️ You still need to log in to VS Code for model selection, but you don't need a paid Copilot plan.

## The Magic Command (This Changes Everything)

Here's the one command that connects everything:

```
ollama launch vscode
```

That's it. Once you run this:

-   You will see the recommended models from Ollama, and your local model in the last.
-   Once done, it asks for the VS Code configuration change. Click Proceed.
-   VS Code detects your local models.
-   Copilot Chat shows them in the model picker.
-   You can start using them instantly.

If you don't see your models, click "Other models" to find them.

## Want to Run a Specific Model?

You can directly launch with a model:

```
ollama launch vscode --model kimi-k2.5:cloud
```

Now imagine this:

-   👉 You open VS Code
-   👉 Select your local model
-   👉 Ask it to refactor your code

And it works — offline. Once you've completed the setup, you don't want to guess if it works, you want to prove it. Here's a simple prompt you can run inside Copilot Chat (with Ollama selected):

```
Explain this code and suggest improvements:
```

```
function fetchData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
```

## What You Should Expect

If everything is set up correctly:

-   You'll get a clear explanation of the code
-   Suggestions like:

-   Using async/await
-   Better error handling
-   Cleaner structure

👉 And most importantly: ⚡ The response should come from your local Ollama model, not a cloud model.

## Bonus: Stress Test Prompt

Try this in your UI repo to push your local model:

```
Refactor this function using modern JavaScript best practices, improve performance, and explain each change step by step.
```

## How It Works Inside VS Code

Once configured:

-   Open the Copilot Chat panel
-   Click the model selector
-   Choose Local
-   Pick your Ollama model

## Real Developer Use Cases

This is where it gets interesting.

-   🔍 Code Review (Offline): Run static analysis without exposing code externally.
-   🧪 Experiment with Models: Try different LLMs without API limits.
-   🏢 Enterprise Security: Perfect for companies with strict data policies.
-   ✈️ Work Without Internet: Yes, AI coding on a flight.