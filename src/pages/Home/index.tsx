import "./home.css";

export default function Home() {
  return (
    <div className="dashboard d-flex justify-content-center align-items-center">
      <div className="text-center">
        <img
          className="p-1"
          src="/logo-dashboard.png"
          alt=""
          width="400"
          height="150"
        />
        <h2 className="mt-5">Since 2022</h2>
        <p>Hel plocal bussiness to grow and conserve the culture</p>
      </div>
    </div>
  );
}
