import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-center">
      <button onClick={() => setOpen(true)} className="btn">
        Open Modal
      </button>
      {open && (
        <div className="main">
          <div className="wrapper">
            <h1>This is a simple modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              perferendis error voluptatum quis dolores, a non. Nemo ipsum
              repellendus velit. Dolores dolore necessitatibus suscipit,
              exercitationem similique labore, aliquam magni, est consectetur
              tempore non nisi?
            </p>
            <button className="btn" onClick={() => setOpen(false)}>
              Close Modal
            </button>
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quis
        saepe nihil molestiae fuga vitae voluptas debitis quos itaque corporis.
        Quisquam, omnis ipsa hic quam accusamus fugiat nemo, reiciendis,
        repellendus quas cum totam ab repellat dignissimos delectus a. Iure nisi
        officia, ullam eveniet quaerat dignissimos, possimus fugit doloremque
        iusto temporibus praesentium tempore maxime magnam qui expedita
        molestias, harum laborum numquam consequuntur ratione quas assumenda. A
        ducimus distinctio incidunt quo, molestiae unde harum rem libero amet
        delectus laborum quia fuga nemo fugit saepe eos alias inventore vero
        error, soluta nostrum cupiditate officia iste? Maxime ipsa fugiat nihil.
        Perferendis nemo deleniti, labore iure sequi optio officiis quaerat
        dicta voluptas, obcaecati dolor tempora inventore molestiae illum
        asperiores veritatis recusandae repellat corrupti, dolorum
        necessitatibus et maxime adipisci sunt voluptatum. Optio, sint! Corporis
        accusamus cumque excepturi nisi fugit similique in consectetur
        consequatur culpa, modi a at labore? Placeat qui commodi modi quia
        mollitia rem iusto excepturi ea dicta quasi, tenetur eum sit nam porro
        magnam maxime maiores perferendis eaque saepe, consectetur impedit
        ratione reprehenderit incidunt! Accusantium id maiores error quis
        distinctio nobis excepturi voluptate voluptas rerum iusto quod inventore
        dolorem eligendi eos aliquid laborum animi optio ducimus, doloribus
        deleniti dignissimos libero possimus necessitatibus. Deserunt ipsum unde
        temporibus commodi quam fugiat deleniti quasi cum, aliquid inventore
        doloremque sequi facilis voluptatem rerum officiis nostrum! Debitis,
        nam. Error, assumenda optio? Porro doloremque vitae dicta nihil minus,
        nulla est ut labore in cupiditate voluptate cumque exercitationem
        perspiciatis ad dolorem reiciendis voluptas deserunt magni maxime
        molestias odio maiores doloribus unde. Nobis omnis quasi, iste, suscipit
        explicabo eveniet ullam, reiciendis nisi blanditiis esse necessitatibus
        architecto? Possimus soluta fuga magni! Mollitia impedit ipsum suscipit
        dicta, laborum dolore autem, eveniet minus et iusto earum ratione
        quisquam odit dolorum quod odio quidem. Reiciendis, recusandae nesciunt
        quisquam ut quas possimus! Eius cum repellendus nulla quas explicabo
        culpa ex ratione excepturi nihil alias temporibus delectus voluptatibus
        nisi, consectetur error consequuntur iure rem! Maxime illum, aperiam
        vero sequi obcaecati aspernatur pariatur sapiente necessitatibus nulla
        possimus doloribus dicta reprehenderit saepe tempora est perferendis aut
        minus, provident expedita accusantium impedit dolore exercitationem
        amet. Reprehenderit doloribus consectetur consequatur eius veritatis
        mollitia ipsum quae! Voluptatem quidem omnis iusto facere sint
        architecto sapiente. Possimus voluptates sequi harum sint dolorem
        eligendi hic veritatis iste recusandae, ipsa quia nesciunt, sit a
        distinctio, laudantium nobis assumenda doloremque. At iusto cum, unde a
        praesentium sit repellendus sunt soluta labore, officia fuga doloremque,
        dignissimos accusamus id voluptate. Maxime neque ipsa optio, quis quos
        non vero doloribus possimus voluptatum quidem, dicta, at assumenda ipsum
        nam dolor hic. Debitis maiores pariatur inventore totam? Rerum,
        recusandae, repellendus aperiam nemo error incidunt quos tempore
        asperiores necessitatibus itaque vitae consectetur beatae facere iusto
        reprehenderit earum iste, aut eius explicabo autem tenetur. Esse
        possimus dolor, provident repellat quidem voluptates laboriosam. Tempora
        natus facere id, voluptas maiores ducimus, doloribus sint omnis alias
        iure perferendis corrupti placeat commodi saepe amet dolores nulla eos
        quis, rerum ipsam officia aspernatur aut unde nobis! Consequatur
        veritatis voluptates unde exercitationem laudantium delectus, pariatur
        laborum facilis ducimus labore. Corporis, veritatis adipisci.
        Praesentium porro veritatis vitae, sequi earum consectetur molestiae
        temporibus excepturi ad doloribus ullam ut maiores exercitationem vero
        libero voluptatibus quibusdam. Obcaecati incidunt voluptates culpa
        nesciunt placeat dolor quae nam? Dicta eos fugiat sunt, tempore quisquam
        mollitia aliquam impedit, beatae inventore consequatur nesciunt! Totam
        vitae, ex voluptate reiciendis quod odio quidem, qui necessitatibus
        minima et quos, earum voluptatem. Autem animi quam id exercitationem
        neque eligendi, deleniti dolores vel a similique fugiat praesentium
        totam consequuntur doloremque distinctio quas. Aut laborum consectetur
        quasi molestias nam. Earum iure numquam distinctio. Nulla dolorum
        voluptatem dolores aspernatur distinctio dolorem accusantium laudantium
        molestiae optio, aut deleniti assumenda expedita sint atque a esse quas
        sunt ad vitae. Facilis cupiditate quo voluptate, suscipit adipisci
        dignissimos obcaecati rerum repellendus, aliquid veritatis hic velit
        totam excepturi deleniti quidem aperiam delectus voluptatibus dolore
        inventore! Provident quibusdam incidunt doloremque, neque similique hic
        consequuntur omnis veritatis corporis mollitia dolores quidem nobis
        cupiditate deleniti? Laudantium magni adipisci commodi corporis dicta
        ab, maxime, cupiditate nisi, veritatis explicabo laborum corrupti cum
        ratione tempora! Quam officiis a quo voluptatem molestiae nemo velit
        molestias doloribus repellat iure veniam magni numquam placeat, sint
        dolores eveniet voluptates ex optio obcaecati non! Quasi doloremque
        explicabo ducimus fugit omnis iste unde aut velit odio. Corrupti harum
        eum suscipit nemo fugit accusamus, repudiandae tenetur ab ex tempore
        necessitatibus, aspernatur, ipsam aperiam illo non neque placeat? Minus
        ea cum sunt voluptate quas repellat eum omnis. Numquam voluptatem
        possimus animi reprehenderit ratione. Velit, pariatur! Amet accusamus
        magni molestiae reiciendis. Fugiat iste provident porro fuga, obcaecati
        libero ipsum, laboriosam possimus dolorum consequatur doloremque numquam
        ex. Consequuntur, nobis aperiam vitae ducimus placeat qui distinctio
        quas officiis nisi esse labore animi pariatur sed cupiditate quisquam
        eligendi dolor nemo asperiores quae? Ad animi commodi dicta fuga
        laboriosam dolores soluta, maiores unde voluptatum. Eligendi error
        ducimus dicta. Cum quia sed doloremque hic ducimus maiores nulla
        laborum, aspernatur atque vel quisquam corporis est dolorem
        necessitatibus. Alias consequuntur amet rem voluptate eius ab vitae
        explicabo porro dolorem, voluptatibus excepturi at, suscipit, aliquam
        tempora. Repellendus explicabo aliquam voluptates sapiente sequi
        consectetur nam nulla corporis eum officiis error autem amet, magnam
        sunt. Accusamus pariatur numquam quas possimus deleniti minus a
        consectetur fugit, repellat veritatis sunt exercitationem ex tenetur
        dolorum dolores error? Consequuntur quia ducimus amet, dolorem adipisci
        modi maiores, labore ex ad nihil exercitationem nulla perferendis atque
        porro doloremque, minus animi mollitia libero. Deleniti amet, non
        molestias quae rerum in earum! Quo sequi, aliquid autem nemo minus esse
        pariatur impedit delectus debitis culpa illo saepe explicabo dolorum
        alias nostrum tempore laboriosam molestias dolor dolorem excepturi
        veritatis quas temporibus quae? Obcaecati nobis dicta, sequi fuga sed
        tempora impedit iste temporibus debitis eius voluptates repellat
        repudiandae dolor. Quisquam numquam explicabo non. Quasi, labore
        voluptates veritatis in blanditiis nobis tempora odio sequi ipsam,
        incidunt vitae mollitia iste reiciendis natus laborum explicabo! Animi
        obcaecati consequuntur ipsam assumenda eum corporis. Omnis repellendus
        adipisci non eum amet culpa voluptatem ratione consequuntur quae
        voluptatibus sed inventore, asperiores, animi aspernatur atque. Tenetur,
        voluptates, alias, aspernatur adipisci repudiandae eligendi unde ad
        consectetur id a illum. Culpa delectus non nemo minus, officia
        necessitatibus doloremque deleniti ipsum, modi atque quibusdam sint
        iste, neque fugit illo sunt aut ullam perspiciatis laborum vitae a.
        Nobis aperiam recusandae, temporibus esse repellendus ipsum nostrum sint
        ab ut aut neque libero magni officiis asperiores obcaecati expedita
        quisquam architecto ducimus similique nihil aliquid? Ipsum sunt, sequi
        ad deserunt voluptatem inventore amet ipsam mollitia. Esse eveniet
        quaerat ea beatae consectetur. Consequuntur minus, a molestias soluta
        officia ipsam sequi in similique provident ut neque et nemo eum hic
        aperiam tempore error corporis! Quasi deserunt impedit dignissimos
        explicabo laborum in magnam fugit saepe culpa exercitationem ab placeat
        quisquam, fugiat itaque reprehenderit deleniti ipsa autem assumenda unde
        alias laboriosam ipsum perferendis velit qui? Consequuntur animi
        doloremque architecto laudantium enim perferendis sapiente quam et
        numquam deleniti sit quasi, mollitia pariatur ipsa rerum itaque
        inventore, ducimus reiciendis at quia deserunt? Neque, unde suscipit
        optio consequuntur facilis delectus nisi sint laboriosam, qui blanditiis
        corrupti aliquam, cumque harum quam maxime soluta! Architecto distinctio
        maxime quae rem error tenetur labore at dicta tempore, soluta magni
        quisquam vel natus nemo eligendi deserunt magnam voluptas et assumenda
        aliquid cumque pariatur asperiores animi praesentium? Tenetur veritatis
        blanditiis corporis veniam ut eveniet, nesciunt et quod, vero, quo
        minima nihil fuga dolor mollitia. Saepe, natus consequatur similique
        culpa sint quaerat vel, quas odio distinctio asperiores provident earum?
        Tempore nemo iste velit facere aliquam. Nemo deserunt magni at
        voluptates veritatis. Quibusdam delectus maxime inventore ea hic amet
        consequatur harum porro velit, facilis laborum ipsum, incidunt commodi
        deleniti! Accusantium facere in nesciunt sunt dicta iste architecto fuga
        officiis, dignissimos iure alias eum dolorum deserunt, doloribus modi
        reiciendis? Optio eum maiores a, blanditiis officia consequatur? Ad odit
        similique modi blanditiis distinctio culpa fuga laborum obcaecati
        aperiam qui! Deserunt quod repudiandae quasi adipisci a alias. Repellat
        asperiores doloremque totam praesentium exercitationem nesciunt eligendi
        accusamus laborum repellendus nam. Quibusdam enim ipsam corporis nam ea
        voluptatum, doloribus ipsum maiores voluptate corrupti omnis illo ex eos
        dolores at pariatur, recusandae nemo tenetur accusantium quam
        necessitatibus magnam? Quibusdam in impedit placeat ullam nostrum
        reprehenderit suscipit ea odit? Iste quos nobis id nihil omnis
        consectetur ut quod dolores molestias suscipit, sequi accusamus velit
        repellendus tempora ipsam mollitia placeat illo veritatis? Repudiandae
        voluptas rerum saepe? Accusantium quos consequuntur praesentium
        veritatis saepe enim id nobis? Provident aperiam nostrum officia earum
        molestias? Nihil quam quis, voluptatibus fuga sapiente culpa
        consequuntur nostrum ut itaque ipsa, quod provident soluta unde, at
        maiores possimus officia illum labore animi vero hic voluptas qui
        aliquid nesciunt? Veritatis explicabo sapiente perferendis doloribus
        quia nulla sint voluptate. Delectus adipisci eum minus maiores id
        architecto rerum eos ab repellat vel, fugiat omnis quia dicta tempora
        aspernatur, ea dignissimos tempore consequatur neque ducimus officia
        consequuntur est libero facere. Sint veritatis ducimus dolores quia
        assumenda quod eaque commodi explicabo delectus, debitis, dolor autem
        iste deserunt voluptatum modi velit repudiandae sapiente ea sit facilis,
        aliquid maiores. Ut unde dolor corrupti omnis corporis impedit hic. Odio
        illo, animi laudantium doloremque, perferendis aliquid dolorum
        exercitationem in officia beatae, quibusdam libero quasi quia dolore ea.
        Dolores, at! Quos iste vero minus sapiente mollitia, reprehenderit,
        aspernatur aliquid esse harum ex, molestias a adipisci facilis amet
        necessitatibus! Deleniti libero quia natus recusandae odio praesentium
        quod voluptatem pariatur ipsa. Quod dolor, rem inventore hic nisi
        adipisci dolores, ratione magnam tempora error earum cupiditate
        perferendis est repudiandae et dignissimos alias maiores, fugit placeat
        rerum odio eaque aut. Cum voluptatem mollitia sapiente optio?
        Repellendus, atque laudantium libero magni dignissimos quia facilis,
        molestiae eum accusantium debitis quis ut, pariatur tenetur quidem
        maiores recusandae necessitatibus dolorum quisquam illum ipsum dolores
        vitae officia. Eveniet, porro beatae quisquam, ratione esse facere
        officia pariatur nihil aliquam illo iusto. Voluptates asperiores
        consequatur, voluptatibus aspernatur sapiente delectus in temporibus
        excepturi vel? Quidem eos beatae soluta corrupti error eveniet dolorum
        ea illo inventore adipisci dolorem voluptas repudiandae ipsa omnis,
        assumenda vitae odit veritatis, numquam totam, fuga quos quia maiores!
        Iure nemo facere tempora quas atque! Recusandae ipsa dolore delectus
        error est debitis maxime ex eveniet alias dicta quaerat accusantium
        expedita, voluptatibus in ipsum magnam tenetur officia incidunt.
        Voluptatem qui adipisci rerum voluptatibus, quia inventore sunt ducimus
        illo. Amet veritatis maiores accusantium perspiciatis nobis, vero
        commodi impedit doloremque doloribus consectetur eveniet exercitationem
        incidunt itaque fugiat quos repellat quaerat molestiae vitae nihil
        expedita sapiente esse libero numquam. Minus consectetur optio animi
        cumque laborum quibusdam temporibus magni dolorem accusamus, provident
        aut pariatur! Nihil dolorem a perferendis neque minima itaque, omnis
        officiis amet harum earum nulla dignissimos asperiores placeat aliquid
        dolor numquam aliquam sequi praesentium sit quaerat deserunt atque
        repellat adipisci molestiae! Id accusantium odit mollitia delectus
        eveniet voluptatem quaerat nesciunt cupiditate sint non molestias itaque
        facilis a deserunt, dolor harum tempora minus ea! Molestias praesentium
        blanditiis provident incidunt aliquam expedita magni, necessitatibus et
        nulla sint maiores architecto iusto veniam, mollitia odit placeat
        pariatur reprehenderit! Labore rerum, non ipsam, quia neque voluptatum
        nostrum atque perferendis doloremque numquam natus eligendi, impedit
        itaque sequi et exercitationem nemo. Dolorem atque totam est, culpa
        nulla illum, debitis deserunt incidunt enim architecto impedit, deleniti
        ducimus ipsam itaque aliquam cum porro quia alias ea. Quisquam suscipit,
        porro possimus excepturi deserunt, odio accusamus fugit ratione iste
        aspernatur qui corrupti ullam dolorem minus aliquid incidunt sint vel
        autem veniam deleniti! Corporis, repellendus! Officiis ipsum
        exercitationem soluta optio, recusandae minima nisi numquam deserunt
        minus, officia cum similique quod porro, nihil culpa quam. Temporibus in
        fugiat sapiente debitis consequatur perferendis. Unde quo ab placeat
        maxime, facere labore vel! Ratione deserunt eaque veniam accusantium
        voluptatibus facere, odio vitae delectus debitis? Aliquam vel vitae, eos
        quisquam libero modi, aperiam impedit officiis veniam saepe soluta fugit
        nesciunt velit id, rerum eaque incidunt ipsam accusantium molestiae
        delectus dolor beatae enim. A eaque reprehenderit ex, distinctio illo
        sed dolorem consequuntur ipsam ipsum quidem, laboriosam cumque, omnis
        voluptate quas excepturi praesentium. Odio a iste aperiam dolore
        repellendus nihil, possimus veritatis officia? Maxime molestiae commodi
        exercitationem vero autem natus praesentium necessitatibus velit quae.
        Adipisci hic nobis impedit sint culpa quos, fugiat vero nemo temporibus
        quibusdam, quas, labore nostrum! Necessitatibus molestias dolor laborum
        velit minima quo.
      </p>
    </div>
  );
}

export default App;
