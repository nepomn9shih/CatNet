import React from "react";

const RandomAvatar = (userId) => {
    let random = Math.ceil(Math.random()*10)
    return (
        <img className="w-100 rounded" src={getRandomAvatar(random)} alt="randomAvatar" />
    )
}

export const getRandomAvatar = (counter) => {
    switch (counter) {
      case 1:
        return "https://www.eastbaytimes.com/wp-content/uploads/2018/10/GettyImages-9015747841.jpg?w=620";
      case 2:
        return "https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg";
      case 3:
        return "https://d885f4fd1763c7c53b88-b63a7d70fba6d58f32f6d8cf64fba882.ssl.cf1.rackcdn.com/Cats-1518-1.jpg";
      case 4:
        return "https://thumbs.dreamstime.com/b/oosterse-cat-big-ears-op-zwarte-ge%C3%AFsoleerde-achtergrond-96766870.jpg";
      case 5:
        return "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-face-by-jonathan-fife.jpg";
      case 6:
        return "https://www.womansworld.com/wp-content/uploads/2019/07/silly-cat-face.jpg?w=750";
      case 7:
        return "https://us.123rf.com/450wm/seregraff/seregraff1706/seregraff170600022/80681959-retrato-de-ginger-cat-con-enormes-ojos-tristes-mirando-la-c%C3%A1mara-sobre-fondo-negro-aislado-vista-front.jpg?ver=6";
      case 8:
        return "https://thumbs.dreamstime.com/b/retrato-del-primer-del-gato-de-bengala-que-silba-en-fondo-aislado-negro-69777209.jpg";
      case 9:
        return "https://thumbs.dreamstime.com/b/el-retrato-del-primer-asust%C3%B3-bengala-cat-face-en-fondo-negro-aislado-73630553.jpg";
      default:
        return "https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/1-angry-ginger-maine-coon-cat-gazing-on-black-background-sergey-taran.jpg?&targetx=-25&targety=0&imagewidth=750&imageheight=500&modelwidth=700&modelheight=500&backgroundcolor=AD6F33&orientation=0";
    }
  };

  export default RandomAvatar