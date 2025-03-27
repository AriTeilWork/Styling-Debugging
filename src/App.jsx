import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import { ProfileCardMaterialUI, ProfileCardStyledComponents } from './components/ProfileCard.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="space-y-8">
          <AuthInputs />
          
          <ProfileCardMaterialUI />
          <ProfileCardStyledComponents />
        </div>
      </main>
    </>
  );
}

