# Transcription-AI-Dashboard

Follow the steps below to clone and run the project locally.


## Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn (package managers)


## Installation

1. Clone the repository:
    git clone https://github.com/ChamilSachintha/Transcription-AI-Dashboard.git

2. Navigate into the project directory:
    cd Transcription-AI-Dashboard

3. Install dependencies:
    - If you are using npm:
        npm install

    - Or if you prefer Yarn:
        yarn install


## Running the Project

To start the project, use one of the following commands:

- With npm: npm start
- Or with Yarn: yarn start

---

## Assumptions and Decisions Made

During the implementation of the UI/UX design, several assumptions and decisions were made to enhance the **user experience** and **product quality**. These choices were based on logical deductions from the given design and standard UI/UX best practices.

### **Assumptions**
1. **Sidebar Logo**  
   - It was assumed that the top image of the sidebar represents the **company logo**.

2. **Active Navigation Icon**  
   - The first icon in the sidebar was highlighted in the design. It was assumed that this represents the **active page** indicator.

3. **Dropdown Selection**  
   - The dropdown menu was **static** in the prototype, showing "John Smith" as the selected option.  
   - Assumed that "John Smith" was meant to be the **currently selected user**.

4. **Prototype Button Overlap**  
   - In the prototype, hovering over **New Notes** and **Start Transcribing** displayed an additional button: **Create Notes**.  
   - Assumed this was an **unintentional design mistake** that could confuse users, so it was **removed** to prevent distractions.

### **Decisions**
1. **Sidebar Icon Behavior**  
   - The first **five icons** in the sidebar were grouped together, separate from the last **two icons** (Logout and Settings).  
   - Assumed that Logout and Settings serve a **different purpose** and should be treated differently.  
   - **Hover effects** were added only to the first **five icons**.  
   - **Tooltips** were added to Logout and Settings icons to provide better user feedback.

2. **Card Component Interactivity**  
   - To improve the **UI’s interactivity**, hover effects were added to the **card components**.

3. **Button Hover Effects**  
   - Applied **hover effects** to buttons where relevant to ensure consistent **user feedback**.

---

