import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="testing">
        Briyan Sitinjak
        <video 
          src={require("../assets/home_bg_timur_project.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
    </main>
  )
}
