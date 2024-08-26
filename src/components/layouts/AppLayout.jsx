import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Loading } from "./Loading";

const AppLayout = () => {
  const navigation = useNavigation();

  // Log the navigation state for debugging purposes
  console.log("Navigation State:", navigation);

  // If the app is currently loading, show a loading spinner or component
  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
