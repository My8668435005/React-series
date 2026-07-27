// App.js (Top Level)
function App() {
  const userSettings = { theme: 'dark', notifications: true };
  return <Dashboard userSettings={userSettings} />;
}

// Dashboard.js (Intermediate)
function Dashboard({ userSettings }) {
  // Dashboard does not need userSettings, but must pass it down
  return <SettingsPanel userSettings={userSettings} />;
}

// SettingsPanel.js (Intermediate)
function SettingsPanel({ userSettings }) {
  // SettingsPanel does not need userSettings, but must pass it down
  return <UserProfileSettings userSettings={userSettings} />;
}

// UserProfileSettings.js (Deeply Nested)
function UserProfileSettings({ userSettings }) {
  // Finally, the data is used here
  return (
    <div>
      <p>Theme: {userSettings.theme}</p>
      <label>
        Notifications:
        <input type='checkbox' checked={userSettings.notifications} />
      </label>
    </div>
  );
}