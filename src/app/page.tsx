import Main from "./_components/main";
import Footer from "./_components/footer";
import Header from "./_components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />

      {/* Main */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
}
