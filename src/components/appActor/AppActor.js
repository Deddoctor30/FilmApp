import Header from "../Header/Header";
import AppForm from "../Form/AppForm";


const AppActor = () => {
   return (
      <>
         <Header/>
         <AppForm method={'getSearchActor'}/>
      </>
   )
}

export default AppActor;