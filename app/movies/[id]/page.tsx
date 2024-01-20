"use client";
import { useParams } from 'next/navigation'
import { MoviesQuery } from "@/app/lib/client/query/Movies";
import { useQuery } from "@apollo/client";
import styles from './moviePage.module.css';
import Image from "next/image";
import { Flex, Rate } from 'antd';
import { useState } from "react";

const MovieDetailPage = () => {
  const [value, setValue] = useState(3);
  const router = useParams();
  
  const { id } = router;
const {data, error} = useQuery(MoviesQuery.GET_MOVIE, {variables: { "getMovieId" :id?.toString()}})
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  return (
    <div className={styles.movie_page_container}>  
      <div className={styles.main_info}>
        <Image width={300} height={200} src={data?.getMovie?.poster} alt="IMG" priority={false}/>
        <div>
          <h1>{data?.getMovie.title}</h1>
          <div className={styles.desc}>
          <Flex gap="middle" vertical>
            <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? <span>{desc[value - 1]}</span> : null}
          </Flex>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique voluptatum quasi adipisci sint? Asperiores iste sunt ex ab dolore inventore corporis,
                commodi reiciendis deleniti voluptates maxime voluptatem! Amet quas sapiente optio quae.
                Velit quibusdam magnam eum? Doloribus quam dolores officiis repudiandae. 
                Porro, reiciendis enim sint error dolores quia soluta natus voluptatum excepturi nihil officia, minus fugiat quidem
                et! Officia sapiente modi error, nemo qui quaerat architecto impedit veniam facere corporis quos omnis fugiat
                perferendis eius? Atque cumque ducimus perspiciatis exercitationem perferendis nostrum fugit aut voluptatum!
                Error libero, accusamus rem laborum, amet nostrum ratione consequuntur tenetur velit repellendus delectus unde
                alias rerum reiciendis odit eaque iusto saepe voluptates. Asperiores quidem dolor nisi natus sit molestiae quasi
                sapiente. Aliquam rem iusto, repellendus aut, nemo reiciendis ratione eaque molestias odit repellat ut 
                blanditiis ab velit mollitia atque. Vel fuga, exercitationem sed sunt blanditiis eligendi voluptas consequuntur 
                obcaecati numquam deleniti ad perferendis vitae minus?
              </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MovieDetailPage;
