

export const Home = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand " href="#">
      Bienvenido
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Añadir nuevo pago <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Servicios
          </a>
        </li> 
      </ul>
    </div>

   

    <ul class="nav navbar-nav navbar-right">
        <img class="avatar" src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg" alt="Avatar"/>
        
    </ul>

    
  </nav>





);








export const HomeAdmin = () => <h2>Home Page(Administrator)</h2>;

// export const Home = () => <h2> Home Page (Private) </h2>
