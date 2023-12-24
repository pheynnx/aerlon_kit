<script>
  import { enhance } from "$app/forms";
</script>

<h1>Login admin</h1>

<form method="POST" use:enhance>
  <label>
    Password
    <input name="pin" type="password" />
  </label>
  <label>
    Pin
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
</form>
