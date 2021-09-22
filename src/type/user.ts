export interface UserProps {
  first_name: string
  last_name: string
  user_id: string
  email: string
  full_name: string
  avatar: string
}

export class UserClass implements UserProps {
  public first_name = ''
  public last_name = ''
  public user_id = ''
  public email = ''
  public full_name = this.first_name + ' ' + this.last_name
  public avatar = '/assets/image/user_avatar.png'
}
