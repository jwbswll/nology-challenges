import Card from '../Card/Card.jsx/';
import style from './CardList.module.scss'

const CardList = () => {
  return (
  <>
    <section className={style.container}>
      <Card albumTitle="Collapsed In Sunbeams" bandName="Arlo Parks" albumRating="4.5" albumArt="https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Collapsed_in_Sunbeams_-_Arlo_Parks.jpg/220px-Collapsed_in_Sunbeams_-_Arlo_Parks.jpg"/>
      <Card albumTitle="fishmonger" bandName="underscores" albumRating="4.5" albumArt="https://e.snmc.io/i/600/w/40ce9f82165f20b7a4c4ac95ac229769/9284018/underscores-fishmonger-Cover-Art.jpg" />
      <Card albumTitle="10,000 gecs" bandName="100 gecs" albumRating="4.5"  albumArt="https://upload.wikimedia.org/wikipedia/en/8/8d/10000_gecs_album_cover.jpg?20230304000101" />
      <Card albumTitle="United" bandName="Phoenix" albumRating="4.5" albumArt="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/PhoenixUnitedalbumcover.jpg/220px-PhoenixUnitedalbumcover.jpg"/>
      <Card albumTitle="The Velvet Underground & Nico" bandName="The Velvet Underground & Nico" albumRating="4.5" albumArt="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Velvet_Underground_and_Nico.jpg/220px-Velvet_Underground_and_Nico.jpg" />
      <Card albumTitle="Chelsea Girl" bandName="Nico" albumRating="4.5" albumArt="https://media.pitchfork.com/photos/5a04739eec4b2c2177a8543d/1:1/w_600/Nico.Chelsea%20Girl.jpg" />
      <Card albumTitle="Saturation II" bandName="Brockhampton" albumRating="4.5"  albumArt="https://upload.wikimedia.org/wikipedia/en/d/d1/Brockhampton_-_Saturation_II.png" />
      <Card albumTitle="Flower Boy" bandName="Tyler The Creator" albumRating="4.5" albumArt="https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"  />
    </section>
  </>
  )
}

export default CardList