export type JWTPayload = {
  sub: string;
  given_name: string;
  family_name: string;
  email: string;
  preferred_username: string;
};

class User {
  token: string;
  refresh_token: string;
  email: string;
  avatar: string = "";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  location: number[] | undefined;

  constructor(jwt: JWTPayload, token: string, refresh_token: string) {
    this.token = token;
    this.refresh_token = refresh_token;
    this.email = jwt.email;
    this.id = jwt.sub;
    this.first_name = jwt.given_name;
    this.last_name = jwt.family_name;
    this.username = jwt.preferred_username;
  }

  public setLocation(latitude: number, longitude: number) {
    this.location = [latitude, longitude];
  }
}

export default User;
