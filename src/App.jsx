import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import {
  ProfileCardMaterialUI,
  ProfileCardStyledComponents,
  ProfileCardVanillaCSS,
  ProfileCardTailwindCSS,
} from './components/ProfileCard.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="space-y-8">
          <AuthInputs />
          <div className="grid grid-cols-2 gap-4 p-8">
            <ProfileCardMaterialUI />
            <ProfileCardStyledComponents />
            <ProfileCardVanillaCSS />
            <ProfileCardTailwindCSS />
          </div>
        </div>
      </main>
    </>
  );
}

