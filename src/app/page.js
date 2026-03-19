import CatalogPreview from "./components/catalog/Catalog";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <CatalogPreview />
      <Contacts />
      <Footer />
    </div>
  );
};