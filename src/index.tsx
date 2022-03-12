import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Affix } from "./lib/components";
import { ThemeContext, Themes, themes } from "./lib/components/Theme";
import { AppHeader } from "./sections/AppHeader";
import { Menu } from "./sections/Menu";
import { ItemGroup } from "./sections/Menu/components/ItemGroup";
import { DataItem } from "./sections/Menu/types";
import "./styles/main.scss";

const App = () => {
  const [theme, setTheme] = useState<Themes>(themes.light);

  const toggleTheme = () => {
    const currentTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(currentTheme);
  };

  const data: DataItem[] = [
    {
      title: "Colors",
      link: "#",
    },
    {
      title: "Typography",
      link: "#",
    },
    {
      title: "Spaces",
      link: "#",
    },
    {
      title: "Buttons",
      link: "#",
    },
    {
      title: "Inputs",
      link: "#",
    },
    {
      title: "Grid",
      link: "#",
    },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <Affix offsetTop="0">
        <AppHeader changeTheme={toggleTheme} />
      </Affix>
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="menu-wrapper d-none-laptop b-color">
          <Menu>
            <ItemGroup header={"General"} items={data} />
          </Menu>
        </div>
        <div className="col col-md-4 d-none-laptop"></div>
        <div className="col col-md-6 col-sm-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam in
          perferendis itaque illo laudantium minima nemo, ducimus tempora omnis,
          aliquam, ipsam deleniti. Repudiandae deleniti voluptates ex.
          Perferendis explicabo quisquam totam nam voluptates. Earum architecto
          vitae provident veritatis consectetur dicta a doloribus quos inventore
          odio numquam, at excepturi illum enim praesentium quae animi harum
          illo? Deleniti nobis quo, dolor consequatur, porro dolorum dolores non
          explicabo et a magni vero at obcaecati reprehenderit excepturi minima
          ipsa omnis voluptate debitis. Suscipit quia vitae vero impedit
          doloremque, quidem blanditiis eaque autem doloribus illum earum
          officia rerum similique itaque debitis possimus! Aliquam assumenda
          laborum nam molestias quidem eum ullam porro beatae. Facilis
          voluptatum explicabo sunt, reiciendis repudiandae soluta laboriosam
          corporis omnis sed fugit ex eligendi tempore, cupiditate odio fuga
          laudantium aliquid consequuntur iure culpa recusandae. Excepturi iste
          id harum corrupti. Officia eligendi necessitatibus iste reiciendis
          laboriosam nisi beatae nobis et corporis quia quae magni dolores
          pariatur ducimus odit neque unde architecto alias, tempora est odio
          eveniet. Voluptate odit placeat, quod repudiandae harum atque fuga
          omnis molestias? Numquam, tenetur. Consequatur odio iste tenetur odit
          amet quasi assumenda dolorem veniam a cum excepturi, reiciendis,
          accusantium esse aperiam optio enim! Nobis odit delectus possimus vel
          ducimus minus sed libero nesciunt quam aut dicta atque nisi quia
          suscipit esse, odio dolores dolorem aliquam a. Voluptate quas ab earum
          rem nobis placeat, velit aut, sint culpa nihil rerum labore
          reprehenderit minima dolorem nulla illo illum? Iusto in, odio
          excepturi cum nam dolor, totam molestiae earum facere quos recusandae
          vel. Molestiae iure officia quisquam at voluptas, est nostrum
          doloremque ut accusamus sunt, nihil nam natus iusto quibusdam
          obcaecati nulla rem? Minima temporibus recusandae blanditiis mollitia
          culpa deleniti nesciunt? Incidunt, nulla accusantium praesentium rerum
          dolorum dolorem illum tempora, commodi velit sequi nihil animi et
          explicabo iste qui omnis ad expedita nam veritatis! Maxime quo
          quaerat, adipisci deserunt veniam placeat optio vero necessitatibus
          aperiam. Facere ab reiciendis rem in totam quas ad ratione illum
          neque, labore doloremque odio nam nobis ullam facilis officia qui
          eveniet eligendi consectetur impedit laboriosam possimus, quam
          consequuntur vero. Deserunt fuga libero architecto, dolor ducimus
          fugit repudiandae voluptates deleniti quae reprehenderit natus,
          pariatur exercitationem sit ratione maiores perferendis repellendus
          ab, consectetur soluta mollitia. Voluptate, dignissimos minus.
          Blanditiis, illo! Nihil qui atque expedita vitae incidunt omnis, enim
          sapiente! Vero corrupti qui optio velit. Ex saepe amet asperiores
          tenetur, neque atque veniam. Eaque autem placeat ab enim atque!
          Doloremque qui vero expedita ratione debitis dolorum possimus sequi
          accusamus ut corrupti sunt eos quisquam, cumque nam earum. Suscipit
          quibusdam id sunt facere delectus illo libero illum qui non
          consequuntur doloribus, ipsam voluptas exercitationem! Quaerat
          consequatur velit eveniet dolor rerum ea voluptas repudiandae id, ex
          magnam temporibus perferendis iste assumenda aspernatur facere dolore,
          excepturi asperiores fugit. Debitis ut quae placeat sapiente facere
          alias est aliquam quidem voluptatibus, enim qui eaque harum obcaecati
          rerum vitae mollitia quaerat dolor labore maxime doloremque. Eveniet
          culpa numquam accusamus esse eius odio enim neque iusto impedit
          blanditiis aut voluptas consequuntur dolorum perferendis tempore eum
          cum provident beatae optio, in reprehenderit. Est, praesentium? Natus
          perferendis nam quod voluptas, quo nisi minus voluptate asperiores,
          magni, tempore corrupti esse quasi. Aperiam dolor quos maiores nobis
          sapiente, ratione illo architecto hic facere obcaecati laudantium,
          reprehenderit ullam animi autem esse perferendis assumenda neque, eum
          enim harum corrupti optio ex! Tempora nesciunt, dolorem delectus sint
          placeat dolores unde quisquam eligendi officiis error ullam quis. Fuga
          quaerat deserunt nulla nemo ullam nobis odio repellat eveniet quos
          suscipit molestias optio dolorum eius, consequatur repudiandae unde
          eos eum veniam! Pariatur omnis a nesciunt eligendi! Soluta accusamus
          qui iste eos reiciendis nostrum ipsum modi, sequi corrupti. Delectus,
          porro. Labore est aliquid explicabo et hic recusandae accusamus
          tempora esse mollitia dolor, fugit id placeat dignissimos quam porro
          at officiis delectus nihil a? Qui consectetur nemo quisquam a sit
          adipisci dolorem explicabo quia perferendis, magni atque facilis et
          molestiae similique nobis delectus illo beatae soluta obcaecati magnam
          quos commodi expedita. Impedit, obcaecati. Dicta consequuntur quod
          nobis magnam id? Quas debitis voluptas distinctio tempora, magni ut
          maiores adipisci explicabo voluptatibus maxime tempore quia voluptates
          nesciunt beatae. Eos expedita consectetur nemo, veritatis odit debitis
          ipsam blanditiis, sint eligendi, aut maxime? Illum, possimus ad quo
          eaque ullam eveniet, ratione harum ut repellat quibusdam nostrum est
          sequi illo sint officiis, et optio nihil minus! Veniam, animi, alias
          blanditiis atque pariatur eligendi tenetur consectetur ipsa quia illum
          iste qui asperiores dicta maxime repellat ad minus ipsam. Totam magni
          ipsa minus facere impedit recusandae, natus culpa eaque eius non quas
          obcaecati quis placeat ad dolor aut qui possimus quisquam voluptatem
          accusantium ex. Eius voluptatum aliquid fugit temporibus minima alias
          asperiores odit enim labore accusantium deleniti necessitatibus soluta
          quisquam sit exercitationem non, totam ipsam blanditiis sed ea
          molestiae aspernatur ipsa harum libero! Voluptate tempore dolore
          placeat repellat nisi, aspernatur quis magnam velit ratione sapiente
          animi mollitia, voluptatibus fuga asperiores natus fugit error commodi
          debitis dolores? Distinctio, omnis mollitia facere consequuntur
          praesentium sed repudiandae corporis molestias soluta odit aspernatur
          alias, porro debitis, qui pariatur dolorum totam. Quibusdam neque
          pariatur aspernatur reprehenderit architecto non voluptatem delectus
          officia repellat voluptatum dicta, illum aliquam laborum consequatur
          optio libero ipsam quos nostrum voluptate inventore! Corporis,
          reiciendis! Asperiores sint architecto fuga perspiciatis ducimus, qui,
          delectus quod ut dignissimos totam quae deleniti vel, ipsum iure
          cumque sapiente labore voluptatum laudantium accusamus dolores? Amet
          voluptates expedita explicabo aliquid aspernatur temporibus
          doloremque, numquam quasi non vero molestias inventore reprehenderit
          necessitatibus, fugiat sint iure repudiandae harum voluptas! Harum
          quae eaque molestias aperiam fugit natus nisi fuga aut, non est
          impedit necessitatibus facere asperiores omnis consequatur sunt enim
          id iusto numquam modi obcaecati a aspernatur hic sint! Nisi odit sint
          ad temporibus magni provident consequuntur quibusdam eius animi
          distinctio cupiditate saepe magnam eos, similique earum expedita
          impedit illo dolorem doloribus unde quis eaque voluptates. Corrupti,
          aut atque debitis quia fugit obcaecati non dolores architecto nesciunt
          consequatur distinctio harum, vero minima ea animi sit? Quas
          cupiditate non laudantium iusto quidem, optio voluptas quisquam animi
          molestias impedit unde mollitia distinctio dolore, pariatur temporibus
          atque. Dolorem ad quas eveniet sit, quod sed, aliquam natus soluta
          unde provident mollitia illum aspernatur quis, vel quidem! Possimus
          neque culpa voluptatem delectus, amet totam necessitatibus numquam
          ipsa obcaecati laboriosam odit fugiat vitae inventore eligendi eaque
          cum quod, et tenetur? Nobis assumenda iure doloremque animi ad itaque
          perferendis omnis quos laborum, quae veniam harum dolorum ut ea magni
          natus odio dignissimos eligendi aperiam, voluptas at culpa quidem
          molestias obcaecati! Sint at quam repellat modi deleniti ad minima
          voluptatibus repudiandae officia in saepe necessitatibus quod
          veritatis ipsum nam esse tenetur, impedit officiis facere ut? Magni,
          omnis autem adipisci quos laboriosam, qui impedit sed pariatur
          quisquam vitae unde, atque illum doloribus fugiat excepturi cupiditate
          corporis. Doloribus voluptas doloremque sed placeat nisi voluptates
          sint, aspernatur deserunt eveniet saepe nemo nobis aut rerum adipisci.
          Vel labore ratione optio hic voluptates eum tenetur deleniti
          assumenda. Repudiandae voluptatem in placeat rerum, voluptatum
          eligendi illum harum perferendis nihil esse, culpa minus. Id in neque
          amet recusandae quis suscipit. Odit eius facere non quae accusantium,
          cumque ex illum dolor debitis neque voluptates rem distinctio
          perferendis veniam minus possimus ea optio mollitia ad. Beatae
          possimus veniam laudantium ipsam inventore voluptatum dicta nesciunt
          praesentium similique, ex quasi odit illo minus dolores at facilis
          voluptate illum dolor? Aliquam vero, alias molestiae blanditiis, quo
          voluptate sint, tempore harum tenetur commodi culpa eveniet nihil quas
          doloribus praesentium impedit voluptatem atque ullam asperiores
          aliquid? Esse, optio! Magni commodi natus rerum molestiae excepturi
          eius atque, unde autem sed, temporibus a quaerat! Culpa repudiandae
          quidem saepe velit dicta maiores harum suscipit tempore ex ea neque
          ipsum quis sint pariatur totam minima quibusdam labore quod, voluptate
          enim laborum numquam sit debitis necessitatibus. Debitis facilis
          aperiam enim rerum, pariatur voluptatem. Qui harum, animi, esse
          perferendis nobis laborum maxime sequi, dignissimos unde aut
          architecto debitis explicabo quia tempora? Officiis beatae sed facilis
          ea iste incidunt nostrum in accusamus! Minima quidem inventore omnis
          incidunt commodi fugit quas atque, alias quis est ipsam blanditiis,
          sed optio autem. Saepe illum deserunt aperiam distinctio laudantium
          exercitationem asperiores cupiditate. Aliquid, cumque necessitatibus
          fugiat ut voluptatem voluptatibus possimus. Harum tempore inventore
          sit facilis provident perferendis. Culpa dolor repudiandae accusamus
          eum soluta quas quia voluptas possimus, ea velit quos sed eaque
          reiciendis perferendis enim fugit optio itaque ipsum nulla error a
          mollitia tempora repellendus eligendi. Eligendi quo porro dolorem
          iusto, enim ex, quaerat at facilis in deleniti sapiente aperiam
          obcaecati vero? Facere, modi ut. Repudiandae, pariatur doloremque odio
          cum ea aspernatur sint eligendi culpa maiores libero corrupti
          corporis, vero labore iste ratione non assumenda! Sit eaque animi
          harum laudantium, est asperiores placeat suscipit dolor tempore
          ratione corrupti in a? Aspernatur quasi libero cum enim facere minima
          eius maxime dolores ea eos maiores obcaecati velit saepe non officiis
          odio mollitia magni debitis, numquam veniam vero autem repellendus.
          Dignissimos sint cum itaque iusto sed eveniet, fugiat, hic iure, nam
          corrupti temporibus rem. Temporibus dicta doloribus consectetur omnis
          ab reiciendis quod excepturi vel dolorum placeat impedit earum cum,
          consequatur, molestiae provident! Magnam perferendis, aliquam velit
          cupiditate modi minima repellendus alias iste unde doloremque autem
          esse repudiandae quibusdam soluta quam nisi voluptatum voluptatem ipsa
          molestias non laborum nulla. Ducimus, quod nihil nisi, quis enim atque
          voluptatem laboriosam incidunt explicabo dignissimos cumque, ad
          praesentium velit a officiis soluta accusamus impedit ut quia? Dolore
          dolorum laborum dicta maxime error iusto aperiam accusamus fugiat,
          ullam iste. Omnis odit, tenetur dignissimos culpa enim vero et id cum
          excepturi? Incidunt, quam cupiditate. Modi molestias incidunt ipsum
          dolor aliquid. Facilis, iure reprehenderit hic excepturi corporis
          cumque ea aperiam ratione eius laudantium quam beatae minima explicabo
          omnis ab nostrum totam, quos consequuntur modi. Aperiam commodi
          corrupti ea enim vel reiciendis iusto dolorem qui saepe
          exercitationem. Molestiae eligendi at, accusantium eos praesentium
          perspiciatis saepe voluptates quaerat repudiandae iure porro
          repellendus eius illum deleniti ipsa dolores numquam laboriosam atque
          dicta maiores accusamus, nostrum possimus reiciendis ducimus! Ullam
          aut laboriosam quaerat molestiae natus omnis! Impedit ex placeat vel
          molestiae dolores, ullam vero quam perspiciatis accusantium fugit
          culpa voluptate necessitatibus ratione eveniet pariatur cumque modi
          expedita in non facere laboriosam! Soluta numquam illum aut excepturi,
          obcaecati quo praesentium magni adipisci, voluptate expedita qui,
          necessitatibus molestiae cumque aliquid eligendi! In odit tempore
          totam voluptates voluptatum. Molestias nesciunt iure animi ipsa
          minima, esse, exercitationem sapiente repellendus enim obcaecati
          aspernatur. Enim hic vitae dignissimos cumque vel, deserunt
          praesentium, sunt alias commodi autem dolor non, cupiditate culpa. Quo
          quos dolor maiores distinctio amet accusamus suscipit quidem ipsa
          vitae corporis blanditiis, et dignissimos est rerum iusto,
          perspiciatis nulla cumque nesciunt eius voluptates dolorem, tenetur
          veritatis. Obcaecati porro nobis illum, corrupti eligendi odio
          eveniet. Quod aliquid dolorum sit ratione? Quas vero impedit
          consequatur nam maiores ratione magnam a sunt nesciunt aliquam!
          Officiis laboriosam laborum dolor natus perferendis, neque itaque
          minima rem quo ducimus quibusdam nisi minus? Repellendus, culpa
          facilis iusto quaerat rerum assumenda neque, architecto fuga qui quos
          amet, similique corrupti dolores? Ullam ea ab soluta necessitatibus
          placeat obcaecati voluptate. Quia, obcaecati. Voluptas, soluta
          deleniti? Consequuntur ad itaque, amet, ipsa sint maxime doloremque
          expedita praesentium necessitatibus excepturi iusto sed corporis
          veniam magni architecto ut nesciunt voluptatem labore commodi mollitia
          aliquid placeat obcaecati. Laborum necessitatibus dolor veritatis
          animi asperiores architecto expedita harum laudantium commodi.
          Aspernatur, cum voluptate libero facere alias veritatis possimus
          itaque, impedit facilis enim laudantium! Consequuntur, eligendi, quod
          ratione earum reprehenderit totam officia quam, cumque architecto esse
          veritatis ipsam temporibus necessitatibus expedita nulla ipsum quo
          quasi asperiores tenetur corrupti nam ea? Distinctio, optio quidem?
          Quae vel voluptatibus accusamus, in dolor omnis consectetur, itaque
          fugiat eligendi ab iure praesentium minus natus? Fugiat modi, eius
          voluptatibus nisi dignissimos porro deserunt praesentium quasi ab
          veritatis explicabo! Aliquam magnam eveniet ad quidem tenetur? Labore
          itaque nam, laboriosam ea nihil animi quisquam amet eum exercitationem
          obcaecati at necessitatibus! Rem ipsum odit magnam accusamus, sed eum
          animi itaque sint, ad, doloribus pariatur aut adipisci praesentium ab
          perspiciatis repellat iure quidem aliquam ratione fugit quis ut. Neque
          minus quod sed id eum, eligendi suscipit esse totam autem corporis!
          Hic id sapiente similique deserunt facilis in culpa nemo consequuntur
          autem illo odio minima vitae recusandae magni, atque, optio aliquid
          nobis.
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      {/* [] You need to create additional class helper for margin-top prop*/}
      {/* [] Think about Col component that will recieve width from 0 to 12
          and break point. Something like:
            <Col break="md" width="6">CONTENT</Col>
            <Col break="sm" width="12">CONTENT</Col>
          
          [x] That mean you need to create additional css classes
      */}
      {/* <div className="wrapper row" style={{ marginTop: "102px" }}>
        <div className="col col-md-3">Menu component</div>
        <div className="col col-md-9 col-sm-12">
          Content component that renders content inside render function
        </div>
      </div> */}
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
