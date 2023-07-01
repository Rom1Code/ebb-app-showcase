import { SectionWrapper, Download, Features } from './components'
import assets from './assets';


const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Restez informé avec les actualités et les mises à jour du club"
        description="Tenez-vous au courant de tous les derniers événements dans le club"
        showBtn
        mockupImg={assets.ebb1}

      />
      <SectionWrapper 
        title="Suivez le classement de votre équipe"
        description="Accédez facilement aux informations sur le classement de votre championnat"
        mockupImg={assets.ebb2}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Suivez le calendrier de votre équipe"
        description="Accédez facilement aux résultats de votre équipe"
        mockupImg={assets.ebb3}
        reverse
      />
      <SectionWrapper 
        title="Espace dédié pour les membres du comité et les entraîneurs"
        description="Accédez aux ressources et informations importantes pour les membres du comité et les entraîneurs"
        mockupImg={assets.ebb4}
      />
      <Download />

    <div className="footer">
      <p>Made with love by {"Rom1Code"} 
      </p>
    </div>

    </>
  );
}

export default App;
