export default function ({ $auth, redirect }) {
  if ($auth.user.type !== 'admin') {
    return redirect('/')
  }
}
