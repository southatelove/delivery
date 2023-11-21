import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";

export function Login() {
  return (
    <>
      {/* <div>
        <div>
          <Headling>Вход</Headling>
          <p>Ваш Email</p>
          <Input></Input>
          <p>Ваш Пароль</p>
          <Input></Input>
        </div>
        <div>
          <Button>Вход</Button>
          <div>
            <a href="*">Нет аккаунта?</a>
          </div>
          <div>
            <p>Зарегистрироваться</p>
          </div>
        </div>
      </div> */}
      <Headling>Вход</Headling>
      <form>
        <div>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" />
        </div>
        <div>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" type="password" />
        </div>
        <Button appearence="big">Вход</Button>
      </form>
    </>
  );
}
