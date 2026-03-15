import CatalogPreview from "./components/catalog/Catalog";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import PdfFloatingButton from "./components/pdf/Pdf";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <PdfFloatingButton />
      <CatalogPreview />
      <Contacts />
      <Footer />
    </div>
  );
};