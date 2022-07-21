import { PencilLine } from "phosphor-react"
import { Avatar } from "../Avatar/Avatar";

import styleSidebar from "./Sidebar.module.css";


export function Sidebar() {
  return (
    <aside className={styleSidebar.siderbar}>
      <img className={styleSidebar.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
     
      <div className={styleSidebar.profile}>
         <Avatar src="https://github.com/montanari2019.png"/>
        <strong>Ikaro Montanari</strong>
        <span> Development</span>
      </div>
      <footer>
        <a href="#" >
          <PencilLine size={20}/>
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}
