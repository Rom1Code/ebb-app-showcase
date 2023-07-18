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
      />
      <SectionWrapper 
        title="Suivez le classement et calendrier de votre équipe"
        description="Accédez facilement aux informations sur le classement et le calendrier de votre championnat"
        mockupImg={assets.ebb7}
        reverse
      />
      <Features />
      <div class="wave2">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>

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
      />
      <Download />
      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="footer">
        <p>Made with love by {"Rom1Code"} 
        </p>
      </div>
    </>
  );
}

export default App;
