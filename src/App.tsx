import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar"


import styles from "./App.module.css";
import "./global.css";

const post = [

    {
      id: 1,
      author: {
        name: "Marco Andrade",
        avatarUrl: "https://github.com/marcoaugustoandrade.png",
        office: "Educador IFRO",
      },
      publisherdAt: new Date('2022-06-25 10:16:32'),
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋",
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        }
      ],
    },
    {
      id: 2,
      author: {
        name: "Igor Coleto Bueno",
        avatarUrl: "https://github.com/IgorColetoBueno.png",
        office: "Devops",
      },
      publisherdAt: new Date('2022-06-16 23:56:32'),
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋",
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "jane.design/doctorcare", 
        }
      ],
    },
    
    {
      id: 3,
      author: {
        name: "Vitor Bailiot",
        avatarUrl: "https://github.com/victorbailiot.png",
        office: "Web Designer",
      },
      publisherdAt: new Date('2022-05-16 15:16:32'),
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋",
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "vitor.design/doctorcare",
        }
      ],
    }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {post.map(post =>{
            return (
              <Post 
              key={post.id}
               author={post.author}
               publisherdAt={post.publisherdAt}
               content={post.content}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
