import Header from "../components/Header";

const EliminationRequest = () => {
  return (
    <div className="container">
      <Header title="Help Center" />
      <div className="p-5">
        <h1 className="font-semibold text-2xl pb-2 border-b border-neutral-200 text-neutral-800">
          Delete Your Account
        </h1>
        <p className="mt-4 text-neutral-700">
          When you delete your account, your profile, photos, videos, comments,
          likes and followers will be permanently removed. You can also choose
          to take a break and temporarily deactivate your account instead.
        </p>
      </div>
    </div>
  );
};

export default EliminationRequest;
