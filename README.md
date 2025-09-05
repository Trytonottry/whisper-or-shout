# WhisperOrShout 🔊🤫  
*A social experiment for Reddit: What would you say if no one knew it was you?*

[![Hackathon](https://img.shields.io/badge/Event-Reddit%20Fun%20%26%20Games%20Hackathon-FF4500?logo=reddit&logoColor=white)](https://redditfunandgames.devpost.com/)
[![Devvit](https://img.shields.io/badge/Powered%20by-Devvit%20Web-000000?logo=react&logoColor=white)](https://devvit.reddit.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Submitted%20%7C%20Ready%20for%20Beta-blue)](https://redditfunandgames.devpost.com/)
[![Category](https://img.shields.io/badge/Category-UGC%20Games-purple)](https://redditfunandgames.devpost.com/)
[![Platform](https://img.shields.io/badge/Platform-Reddit%20Interactive%20Posts-FF5700)](https://devvit.reddit.com/docs/concepts/interactive-posts)

> **Built for the [Reddit Fun & Games Hackathon](https://redditfunandgames.devpost.com/)**  
> A Devvit Web app that explores the tension between **private whispers** and **public shouts** — all within a Reddit post.

---

## 🎯 What is WhisperOrShout?

Every day, users are asked a bold, thought-provoking question:

> *"What would you do if you could be invisible for one day?"*  
> *"Which app would you delete from everyone’s phone?"*

They choose how to respond:
- **Whisper** → answer anonymously (only the system sees it)
- **Shout** → post it publicly as a comment

After 24 hours, the community sees:
- 📊 What percentage chose to whisper vs. shout
- 🧠 Common themes in anonymous responses
- 😂 The funniest public confessions

It’s not just a game — it’s a **social mirror** for Reddit.

---

## 🌟 Why It’s Reddit-y

- ✅ Sparks discussion in comments
- ✅ Encourages user-generated content (UGC)
- ✅ Built for community, chaos, and curiosity
- ✅ Daily refresh keeps users coming back
- ✅ Meme-worthy responses guaranteed

---

## 🎮 How to Play

1. Open a post with the `WhisperOrShout` app.
2. Read the daily question.
3. Choose:
   - **Whisper**: type your answer privately
   - **Shout**: your answer becomes a public comment!
4. See how others responded in the live stats panel.

> 💬 Example shout:  
> *"I would reorganize everyone’s fridge by expiration date. Someone has to do it."*

---

## 🛠 Tech Stack

- **Framework**: [Devvit Web](https://devvit.reddit.com) (React-based)
- **Languages**: JavaScript, JSX
- **Storage**: Devvit Storage API
- **Interaction**: Comment API, UI Components
- **No backend needed** — runs entirely on Reddit

---

## 📦 Project Structure
whisper-or-shout/
├── src/
│   ├── components/       # UI components (WhisperForm, StatsDisplay, etc.)
│   ├── utils/
│   │   ├── storage.js      # Load/save stats
│   │   └── questions.js    # Daily question pool
│   ├── App.jsx             # Main logic & state
│   └── main.jsx            # Devvit app entry
├── public/
│   └── icon.png            # App icon
├── README.md
└── devvit.yaml             # App config & permissions

## 🚀 How to Run (For Developers)

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- Devvit CLI:  
  ```bash
  npm install -g @devvit/cli
  ```

  ### 2. Clone the repo
  ```bash
git clone https://github.com/Trytonottry/whisper-or-shout.git
cd whisper-or-shout
```

 ### 3. Install & build
 ```bash
 devvit build
 ```

  ### 4. Upload to Reddit
  ```bash
  devvit upload
  ```

  ### 5. Install on your subreddit
  - Go to developers.reddit.com
  - Install the app on your test subreddit (e.g. r/WhisperTest)
  - Create a post and embed the interactive app
     
## 📜 License 

This project is licensed under the MIT License — see the LICENSE  file for details. 
 
## 🏆 Built for the Reddit Fun & Games Hackathon 

    - Category: UGC Games
    - Prize Pool: $49,000
    - Submission: Devpost Page 
    - Status: Submitted & ready for beta

## 🙌 Acknowledgements 

Built with ❤️ for the Reddit community.
Special thanks to the Devvit team and r/GameOnReddit for inspiration. 
 
## 📬 Feedback? 

Found a bug? Want a new feature?
Open an issue or PR — contributions welcome!     
