export default function Home() {
  return (
    <div className="flex h-screen bg-base-100 items-center justify-center">
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <div className="w-full flex justify-center font-bold text-2xl">
          <h1>Coco IMS</h1>
        </div>
        <label className="fieldset-label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="fieldset-label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  );
}
