import AddNewNote from "./components/AddNewNote";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow">
        <AddNewNote/>
      </main>
      <Footer />
    </div>
  )
}
