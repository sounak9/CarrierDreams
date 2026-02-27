import MainLayout from "./components/layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import StructuredData from "./components/seo/StructuredData";
import ScrollToTop from "./components/shared/ScrollToTop";

export default function App() {
  return (
    <>
      <StructuredData />
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </>
  );
}
