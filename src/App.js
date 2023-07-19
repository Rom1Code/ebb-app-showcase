import { SectionWrapper, Download, Features } from './components'
import assets from './assets';


const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Restez informé avec les actualités et les mises à jour du club"
        description="Tenez-vous au courant de tous les derniers événements dans le club"
        showBtn
        mockupImg={assets.ebb8}
        banner="banner"
      />
      <SectionWrapper 
        title="Suivez le classement et calendrier de votre équipe"
        description="Accédez facilement aux informations sur le classement et le calendrier de votre championnat"
        mockupImg={assets.ebb7}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Suivez les matchs du jour des équipes du club"
        description="Retrouver les résultats de chaques journées des équipes "
        mockupImg={assets.ebb6}
        reverse
      />
      <SectionWrapper 
        title="Espace dédié pour les membres du comité et les entraîneurs"
        description="Accédez aux ressources et informations importantes pour les membres du comité et les entraîneurs"
        mockupImg={assets.ebb9}
        banner="banner02"
      />
      <Download />
      <div className="footer banner04">
        <p>Made with love by {"Rom1Code"} 
        </p>
      </div>
    </>
  );
}

export default App;
