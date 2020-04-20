import React from "react";

function Profile() {
  return (
    <>
      <header className="coverHeader">
        <img src="./img/Health club.jpg" alt="cover header" />
      </header>

      <main className="profile">
        <div className="profile__grid">
          <div className="profile__sidebar">
            <div className="profile__sidebar--img">
              <img src="/img/General Gym.jpg" alt="" />
            </div>
            <h2 className="profile__sidebar--name">Hadi Maher</h2>
            <div className="profile__menu">
              <ul className="profile__ul">
                <li className="profile__li">
                  <i className="fas fa-dumbbell"></i> Gym Membership
                </li>
                <li className="profile__li">
                  <i className="fas fa-clipboard-list"></i> Workout Schedual
                </li>
                <li className="profile__li">
                  <i className="fas fa-pencil-alt"></i> Reviews
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- divider --> */}
          <div className="profile__main">
            <div className="gymbox gymbox__memberships">
              <img src="./img/logo.png" alt="Gym Name" />
              <p>your membership expires in 30 days</p>
            </div>
            <div className="gymbox gymbox__workoutSchedual">
              <svg
                id="Filled"
                height="59"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m104 56a0 0 0 0 1 0 0v112a0 0 0 0 1 0 0h-48a0 0 0 0 1 0 0v-64a48 48 0 0 1 48-48z"
                  fill="#eba72e"
                />
                <path
                  d="m312 56h48a0 0 0 0 1 0 0v112a0 0 0 0 1 0 0 48 48 0 0 1 -48-48v-64a0 0 0 0 1 0 0z"
                  fill="#eba72e"
                  transform="matrix(-1 0 0 -1 672 224)"
                />
                <path
                  d="m328 376h-72v-48h-96v48h-72a64 64 0 0 0 -64 64v48h368v-48a64 64 0 0 0 -64-64z"
                  fill="#60b8d1"
                />
                <circle cx="88" cy="200" fill="#f0c6a4" r="48" />
                <circle cx="328" cy="200" fill="#f0c6a4" r="48" />
                <path
                  d="m264 328h-112a64 64 0 0 1 -64-64v-192h240v192a64 64 0 0 1 -64 64z"
                  fill="#f7cca9"
                />
                <circle cx="152" cy="184" fill="#596063" r="16" />
                <circle cx="264" cy="184" fill="#596063" r="16" />
                <path
                  d="m144 248h128a0 0 0 0 1 0 0v16a32 32 0 0 1 -32 32h-64a32 32 0 0 1 -32-32v-16a0 0 0 0 1 0 0z"
                  fill="#ed6f6d"
                />
                <path
                  d="m256 328v48a32 32 0 0 1 -32 32h-32a32 32 0 0 1 -32-32v-48z"
                  fill="#f0c6a4"
                />
                <path d="m280 304h160v48h-160z" fill="#d0d2d4" />
                <path
                  d="m376 280h-32a32 32 0 0 0 -32 32v48a16 16 0 0 0 16 16v112h64v-112a16 16 0 0 0 16-16v-48a32 32 0 0 0 -32-32z"
                  fill="#f7cca9"
                />
                <path d="m440 280h48v96h-48z" fill="#e9eef2" />
                <path d="m232 280h48v96h-48z" fill="#e9eef2" />
                <path
                  d="m328 56v32h-224c-.6 0-1.21-.01-1.81-.03q-1.86-.045-3.69-.21a63.989 63.989 0 0 1 -58.5-63.76h256a32 32 0 0 1 32 32z"
                  fill="#ffb632"
                />
                <path d="m176 136a8 8 0 0 0 -8-8h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8z" />
                <path d="m248 144h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16z" />
                <path d="m176 184a24 24 0 1 0 -24 24 24.027 24.027 0 0 0 24-24zm-32 0a8 8 0 1 1 8 8 8.009 8.009 0 0 1 -8-8z" />
                <path d="m232 216a8 8 0 0 0 -16 0 8 8 0 0 1 -16 0 8 8 0 0 0 -16 0 24 24 0 0 0 48 0z" />
                <path d="m264 208a24 24 0 1 0 -24-24 24.028 24.028 0 0 0 24 24zm0-32a8 8 0 1 1 -8 8 8.009 8.009 0 0 1 8-8z" />
                <path d="m488 272h-48a8 8 0 0 0 -8 8v16h-19.35a40.052 40.052 0 0 0 -36.65-24h-32a39.975 39.975 0 0 0 -8.565.933 72.615 72.615 0 0 0 .565-8.933v-8.581a55.953 55.953 0 0 0 32-94.558v-56.861a56.11 56.11 0 0 0 -32.1-50.645 40.046 40.046 0 0 0 -39.9-37.355h-256a8 8 0 0 0 -8 8 71.806 71.806 0 0 0 23.074 52.759 55.924 55.924 0 0 0 -7.074 27.241v56.862a55.953 55.953 0 0 0 32 94.557v8.581a72.081 72.081 0 0 0 72 72v32h-64a72.081 72.081 0 0 0 -72 72v48a8 8 0 0 0 8 8h368a8 8 0 0 0 8-8v-105.371a24.042 24.042 0 0 0 16-22.629h16v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-96a8 8 0 0 0 -8-8zm-200 40h16v32h-16zm0 48h16a23.866 23.866 0 0 0 1.387 8h-17.387zm-29.536-280.276a56.1 56.1 0 0 1 -49.883-47.724h23.874a71.95 71.95 0 0 0 26.009 47.724zm-9.883-47.724h23.876a71.989 71.989 0 0 0 25.919 47.718 56.1 56.1 0 0 1 -49.795-47.718zm-30.117 47.724a56.1 56.1 0 0 1 -49.883-47.724h23.874a71.95 71.95 0 0 0 26.009 47.724zm-40 0a56.1 56.1 0 0 1 -49.883-47.724h23.874a71.95 71.95 0 0 0 26.009 47.724zm-40 0a56.1 56.1 0 0 1 -49.883-47.724h23.874a71.95 71.95 0 0 0 26.009 47.724zm197.536 159.476v-78.39a40 40 0 0 1 0 78.39zm16-135.2v45.414a55.52 55.52 0 0 0 -16-4.833v-72.581a40.089 40.089 0 0 1 16 32zm-32-48v18.612a55.979 55.979 0 0 1 -31.419-42.612h7.419a24.028 24.028 0 0 1 24 24zm-271.43-24h23.885a71.957 71.957 0 0 0 26.006 47.722 56.111 56.111 0 0 1 -49.891-47.722zm31.43 59.872v52.709a55.52 55.52 0 0 0 -16 4.833v-45.414a39.963 39.963 0 0 1 4.092-17.634 71.626 71.626 0 0 0 11.908 5.506zm-32 108.128a40.067 40.067 0 0 1 32-39.195v78.395a40.067 40.067 0 0 1 -32-39.2zm48 64v-168.455a72.383 72.383 0 0 0 8 .455h216v168a55.637 55.637 0 0 1 -3.223 18.73 40.172 40.172 0 0 0 -9.427 13.27h-19.35v-16a8 8 0 0 0 -8-8h-.813a40.108 40.108 0 0 0 .813-8v-16a8 8 0 0 0 -8-8h-128a8 8 0 0 0 -8 8v16a40.045 40.045 0 0 0 40 40h48v16h-72a56.063 56.063 0 0 1 -56-56zm144 104v-80h32v80zm-16-88v8h-48a24.027 24.027 0 0 1 -24-24v-8h112v8a24.07 24.07 0 0 1 -1.377 8h-30.623a8 8 0 0 0 -8 8zm0 56v40a8 8 0 0 0 8 8h14.624a24.039 24.039 0 0 1 -22.624 16h-32a24.027 24.027 0 0 1 -24-24v-40zm-192 104a56.063 56.063 0 0 1 56-56h64.805a40.068 40.068 0 0 0 39.195 32h32a40.068 40.068 0 0 0 39.2-32h56.8v96h-288zm368-80a8.009 8.009 0 0 1 -8 8 8 8 0 0 0 -8 8v104h-48v-104a8 8 0 0 0 -8-8 8.009 8.009 0 0 1 -8-8v-48a24.028 24.028 0 0 1 24-24h32a24.028 24.028 0 0 1 24 24zm16-16v-32h16v32zm64 24h-32v-80h32z" />
              </svg>
              {/* <!-- Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> --> */}
              <h1>Today is Chest Day</h1>
              <ul>
                <li>upper body 3 sets 10 reps</li>
                <li>upper body 3 sets 10 reps</li>
                <li>upper body 3 sets 10 reps</li>
              </ul>
            </div>
            <div className="gymbox gymbox__reviews">
              <span className="half-circle">25</span>
              <p>you've reviewed 25 Gyms</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
