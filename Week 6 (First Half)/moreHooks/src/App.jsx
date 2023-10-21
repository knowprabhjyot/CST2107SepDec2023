// import { useRef } from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [shouldApiBeCalled, setShouldApiBeCalled] = useState(false); 
  const [postID, setPostID] = useState(1);
  const [postData, setPostData ] = useState({});
  // const divRef = useRef(null);

  // const scrollToBottom = () => {
  //   if (divRef.current) {
  //     // divRef.current.scrollTop = divRef.current.scrollHeight;
  //     divRef.current.scrollIntoView({ behaviour: 'smooth', block: 'end'})
  //   }
  // }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data, 'data');
      setPostData(data);
    })
    .catch((error) => {
      console.error(error);
    })

    // Destroying Phase (Unmounting Phase)
    return () => {
      console.log('Component is Destroyed');
    }


  }, [shouldApiBeCalled])

  useEffect(() => {
    console.log("CALLED ONLY ONCE");
  }, [])

  const callAPI = () => {
    setShouldApiBeCalled(!shouldApiBeCalled);
    setPostID(postID + 1);
  }

  return (
    // <>
    //  <div>
    //   <h1>{postData.title}</h1>
    //     {/* <div id='main-div' ref={divRef}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quae! Expedita veritatis omnis itaque veniam est enim necessitatibus totam aut, similique quidem porro illo libero natus repellendus dolores beatae pariatur!
    //       Numquam assumenda nam laboriosam iusto, impedit animi, rerum accusantium ea, aut consequatur harum nemo voluptatum velit non eos ex aliquid explicabo architecto libero eveniet dolor! Iure exercitationem nesciunt quae facilis.
    //       Ea nam nostrum fugiat! Eligendi odit, perspiciatis esse soluta amet omnis adipisci eveniet porro magni voluptates similique sunt. Obcaecati, iure nemo? Maxime iusto error quos accusantium, consectetur quas modi laborum!
    //       Accusantium ab vitae quis impedit deserunt, dolorum provident minus dicta atque, facere et praesentium? Velit dolor voluptate officia, commodi quis aut esse nihil deleniti dolore quam praesentium sunt labore omnis.
    //       Aperiam alias nemo repudiandae neque beatae qui eaque perferendis quia et obcaecati cumque totam doloribus rem expedita deleniti, tempore sit nostrum repellendus reprehenderit illo fugit assumenda dolorum pariatur perspiciatis? Aspernatur?
    //       Suscipit est nam quae minima itaque adipisci quas asperiores, quos et qui tenetur quibusdam aut ab aliquid cumque distinctio facere perspiciatis autem dolore vitae error, praesentium numquam! Minus, autem sequi?
    //       Quam nostrum similique sint, odio numquam nemo et eaque a! Doloremque tempora facere id a suscipit aperiam earum tempore perspiciatis cumque placeat, reiciendis, corrupti, quia ea! Perferendis, quae. Cupiditate, nulla.
    //       Optio, fugiat nisi aspernatur dolores repellat deleniti eos iusto minus quas atque sit, cumque molestiae sequi sapiente cupiditate, libero error dicta fugit et ab eius. Ut est eaque error vel.
    //       Molestias odit ad repellat veniam impedit possimus incidunt aspernatur nisi. Earum distinctio aliquid, quae hic debitis impedit ut nemo quam, iste porro in dolor minus, alias veritatis sunt facere fugit!
    //       Voluptatibus numquam, dolorum labore odit voluptates sint vel molestiae reiciendis tenetur maiores, rem blanditiis commodi quidem! Placeat reprehenderit porro esse vero? Itaque nemo eligendi expedita architecto, necessitatibus temporibus dolorem magnam.
    //       Officia eius vitae maxime doloribus omnis eligendi debitis quos fugit iusto sed et eaque dolorum ex, obcaecati odit. Commodi explicabo a blanditiis repellendus, iusto accusamus! Unde cumque officia recusandae eos?
    //       Sint odit eum itaque repudiandae aliquam obcaecati eveniet quis asperiores vero quas eius vel aliquid nemo, velit rem architecto explicabo. Eligendi, reiciendis maiores? Ratione vitae adipisci molestiae asperiores maxime porro!
    //       Eum, modi unde. Repudiandae, blanditiis sint ex error nihil quisquam quas. Quos cumque qui tenetur. Vitae, nesciunt est consequatur iste praesentium pariatur delectus. Suscipit soluta, quis provident tenetur dicta quisquam!
    //       Nihil deleniti nisi ab? Labore assumenda, dolore placeat quam optio quas, magnam architecto ipsam officia deleniti tempore ut expedita blanditiis. Quo debitis asperiores quisquam dolorum. Ex perferendis exercitationem cupiditate repellat.
    //       Maiores totam quos veritatis officiis natus quo illum quisquam cupiditate assumenda autem aliquid voluptas, qui sed vel rerum libero? Sequi modi molestias quis fugiat rem quos tenetur suscipit similique hic!
    //       Assumenda distinctio laudantium pariatur facilis voluptatem! Illum commodi iure repellendus voluptate praesentium quaerat eius harum ipsa. Perferendis, amet. Placeat consequatur labore at laboriosam sed saepe porro fugit quibusdam quod neque.
    //       Iusto assumenda voluptate exercitationem nobis distinctio, est hic nesciunt nisi! Odit aliquid tempore fuga numquam, voluptate eveniet quis! Magnam mollitia soluta tempora assumenda exercitationem doloribus neque qui dolore, fugit voluptas.
    //       Perferendis neque ex ut odio, ad soluta libero repudiandae excepturi ea eum eos dicta iusto a quidem animi autem, pariatur incidunt nam minima! Neque numquam unde quis impedit quaerat officiis!
    //       Dolorum quam accusamus eius libero mollitia perferendis, facere omnis possimus aliquam blanditiis. Veritatis, aliquid. Doloribus provident officia sequi suscipit atque accusantium similique ipsum, ducimus voluptates recusandae error perferendis consequatur deserunt.
    //       Harum nesciunt a corporis possimus omnis iusto saepe quae non! Ab rerum natus mollitia obcaecati perferendis atque, error doloribus officiis soluta amet fugiat quaerat cum hic aspernatur ea quia perspiciatis?
    //       Laborum quaerat incidunt repellat deserunt possimus saepe tempore nulla veritatis quas vel sequi nobis similique inventore hic fuga debitis aspernatur, necessitatibus quod quisquam voluptate alias eos, architecto doloribus. Laudantium, eligendi?
    //       Amet hic eum ex dolorum ab quisquam temporibus et culpa quae, nihil veritatis quasi, aliquid quod unde voluptatem incidunt! In officiis perferendis maiores earum sequi quidem architecto porro quo a!
    //       Molestias at hic dignissimos nostrum molestiae nihil est libero quam omnis? At natus commodi atque blanditiis fugiat nulla soluta, voluptatem itaque iure necessitatibus minus enim magnam delectus et nesciunt nisi.
    //       Dolores incidunt repellat non iure earum distinctio debitis a laboriosam obcaecati illo veritatis ab porro possimus ipsa, facilis quis autem! Ex, quos provident. Repudiandae fugit tenetur officiis atque numquam unde!
    //       Pariatur, at veniam, dolores tempore nemo illum qui nesciunt aut asperiores, expedita voluptatibus est! Odit nihil labore veritatis officiis dolor reprehenderit, delectus laborum ex blanditiis neque quibusdam quam perferendis autem!
    //       Excepturi obcaecati accusamus veniam recusandae nemo qui repudiandae aliquam magni illum sapiente soluta iste, dignissimos alias blanditiis? Dolorum nemo molestias veniam est. Cupiditate accusantium ullam impedit animi, aut facere vero?
    //       Unde commodi dignissimos ratione ut autem aperiam cumque fugit omnis, sequi consectetur laborum iste, nulla itaque debitis facilis optio tempora temporibus a ipsum libero, labore neque cupiditate esse. Corporis, ab.
    //       Ipsum, inventore placeat voluptas aut accusantium, animi deleniti temporibus iure voluptatum sequi velit, totam suscipit eveniet deserunt! Voluptate, amet cupiditate quod deleniti vero, nostrum, quas odio corporis quibusdam necessitatibus delectus!
    //       Ducimus, culpa est, in voluptate ad, placeat veritatis non autem eligendi reprehenderit necessitatibus corporis! Non quaerat sed quas voluptatum dolor fuga eos aliquid, itaque quae natus ratione laudantium animi earum.
    //       Obcaecati adipisci facilis deserunt doloremque mollitia repellendus animi illo soluta ratione nesciunt, odit consequatur culpa voluptatem accusantium recusandae minus unde molestiae laborum iure officiis nostrum id amet facere. Rerum, consectetur!
    //       Aliquid animi dolorum molestias porro et explicabo expedita aperiam! Aperiam, ad labore. Facere esse repellat distinctio earum odio, est hic reiciendis blanditiis quibusdam veniam amet debitis, placeat culpa fuga quo?
    //       Quod excepturi quas natus numquam nam iste, dolorem eaque explicabo tempore? Nesciunt officiis molestias rem nulla neque, reprehenderit vitae iusto quasi earum fugit aperiam nobis debitis dignissimos optio ex est.
    //       Perspiciatis, qui! Illum, sit. Porro, animi atque! Dolor et totam quisquam magni cupiditate, quibusdam est quaerat? Adipisci nobis nulla distinctio illum necessitatibus voluptatem quos, minima deleniti nostrum corporis perspiciatis voluptas?
    //       Animi perspiciatis sint eos culpa, vero, et ipsam deleniti assumenda ullam eligendi repellat nulla. Quos quo quasi consequatur dolorem distinctio? Quam, labore illum. Nesciunt obcaecati pariatur cumque natus nulla ad.
    //       Perferendis incidunt, distinctio commodi vero repellendus quaerat iusto, iste autem quo vitae libero minus adipisci necessitatibus itaque eaque unde consequuntur exercitationem natus quas! Voluptatem nemo at ea corporis sed earum?
    //       Harum, dolores. Repellendus maiores cumque ex ad veritatis accusamus? Voluptatibus doloribus adipisci quaerat! Iste est dolores vero harum nisi exercitationem suscipit repellat, incidunt, quia sequi reiciendis, facere labore pariatur accusamus.
    //       Architecto, praesentium vel doloribus facilis voluptate at, corporis deserunt repellendus placeat vitae officiis, sequi aspernatur nulla exercitationem. Eius, earum tenetur ex eligendi beatae officia eaque debitis molestiae perspiciatis voluptas officiis.
    //       Quod ullam impedit iste voluptatem in, unde quidem debitis sequi, nostrum veniam eum consequuntur mollitia excepturi expedita natus eos nemo qui commodi, animi similique? Consectetur aliquid culpa nesciunt tempora sint!
    //       Laudantium dolores possimus beatae quaerat eos debitis sapiente eligendi vero numquam fuga expedita facere distinctio laboriosam libero minima perferendis, ex placeat id ipsa, nesciunt ut quidem culpa exercitationem porro? Aliquid?
    //       Assumenda corrupti numquam omnis maiores eveniet. Alias sequi labore dolor eos assumenda. Provident accusantium nesciunt sunt reiciendis sed architecto molestiae illum id, magni debitis perferendis natus nisi, labore voluptatum dolorem.
    //       Fugit facilis ipsam qui dignissimos maxime? Fuga, nam! Totam cum maiores aspernatur pariatur quas. Accusamus recusandae ipsa quasi qui autem, perferendis doloremque cum. Laboriosam, iusto. Magni, quae tempore. Incidunt, sed.
    //       Impedit et eius tempora voluptatem cupiditate mollitia qui, quia nobis placeat culpa hic voluptate assumenda laudantium quam. Nemo iste laborum veniam atque at, nobis voluptatibus aliquid dolore magni dolores corrupti?
    //       Repellat ipsa ratione soluta numquam similique tempora iste eaque aperiam, reprehenderit totam? Doloribus quas similique qui, perspiciatis velit dolore, atque iure nesciunt sit cumque libero perferendis quo fugiat, porro iste.
    //       Eaque earum fuga sapiente delectus libero eum aliquid, sequi distinctio! Assumenda iure ipsa neque consectetur praesentium est fugiat inventore expedita delectus, sequi natus, incidunt blanditiis atque a ullam, eos id?
    //       Repellendus blanditiis dolorum sunt pariatur aspernatur vel excepturi quisquam, delectus quibusdam officiis quo deserunt fugit ea nam commodi facere. Dolor, repellendus cum. A mollitia pariatur nobis consectetur magnam, quaerat blanditiis.
    //       Nobis, maxime? Maiores qui eos praesentium obcaecati suscipit ducimus aliquid facere eveniet perferendis quibusdam enim earum quaerat rerum perspiciatis, nam, quas impedit, mollitia odio sapiente. Nemo inventore quod modi atque!
    //       Illum qui dolorum laudantium numquam dignissimos saepe ad labore autem doloremque excepturi illo deserunt earum quibusdam hic, praesentium explicabo quaerat alias eius! Tempora, doloribus dolore in fugit ut accusantium quibusdam?
    //       Tenetur, consequuntur blanditiis maxime illum obcaecati tempora, laboriosam atque, nemo voluptatem veniam fugiat. Quam, quos eum porro in adipisci maxime esse laudantium repellendus voluptatum quisquam debitis nam ducimus rem ipsa.
    //       Et illum repellat excepturi voluptatem incidunt exercitationem ut? Minima vitae ipsa nulla eius unde, dolore eligendi obcaecati officia, amet ipsam natus tempore architecto porro consectetur magnam quo, quasi accusantium laudantium.
    //       Officia a repellendus culpa magni temporibus error cumque pariatur debitis ab modi, fuga ad perferendis dicta consequuntur quo consectetur dolores omnis. Repellendus, hic? Dignissimos ex laborum fugit harum aspernatur id.
    //       Beatae sunt reprehenderit odio ipsum esse minima facere at consequuntur ad neque nemo ea nam, tempora rerum asperiores temporibus voluptatum! Corporis est cum alias repellendus voluptates illo, eius deleniti explicabo?
    //       Ex doloremque laudantium iusto hic quibusdam ratione! Alias aspernatur quod non similique id iste, ducimus ut nulla pariatur tenetur atque laborum at laudantium totam dolor? Repellendus sequi cumque qui quo?
    //       Maxime quaerat alias illum veritatis temporibus accusamus necessitatibus ratione fugit unde. Illum eum aliquam esse unde voluptate excepturi fuga rem, quia facere nulla? Veritatis quos debitis vitae labore accusamus laudantium!
    //       Quam temporibus praesentium, itaque, natus eum ratione aut reprehenderit facilis repudiandae, ex dolorum consequatur eveniet vel cumque unde tempore. Distinctio saepe expedita, porro illo quod ipsa iusto quisquam consectetur non.
    //       Optio, aperiam. Ea voluptate sit corrupti quae doloremque culpa illo corporis, vel exercitationem consequuntur necessitatibus explicabo? Suscipit doloremque corrupti, autem expedita ducimus, odit at porro dolorem iste dolorum quod magnam.
    //       Quasi eveniet porro fugit enim, atque sequi libero soluta repellendus quisquam, molestias asperiores neque, fugiat ab. Maiores sunt voluptatibus non officiis eaque. Quis assumenda, porro ipsa tempora ad commodi aliquam!
    //       Labore error accusamus reiciendis magnam maiores quidem laudantium a, ea optio quo libero eveniet voluptas nam minima voluptatem nobis molestias inventore aliquid atque excepturi. Aliquam, quasi. Aut cum rerum autem.
    //       Mollitia optio delectus voluptatem molestias soluta, unde sint asperiores facilis repudiandae. A, eos at. Quam sit consequuntur facilis eveniet optio unde illo perspiciatis, aperiam tenetur doloribus quis placeat est officia?
    //       Error nisi animi magni nihil quia magnam, asperiores, rerum optio incidunt velit enim architecto possimus debitis a porro vitae consectetur atque eum veniam? Voluptas aut vel ipsum sit modi. Aperiam?
    //       Enim fuga ullam obcaecati recusandae ex voluptatum, id molestiae. Sint, enim repudiandae? Eligendi, cumque labore vero, nostrum qui aperiam cum, quo at odio animi porro? Maxime eligendi quis ipsum impedit.
    //       Iste illum perferendis suscipit exercitationem nihil blanditiis optio expedita, minus, obcaecati sunt necessitatibus placeat, cumque cum similique id labore? Facilis, id suscipit. Velit non optio quisquam dicta odit omnis incidunt?
    //       Nisi atque iure veniam natus et. Saepe exercitationem velit dolores voluptatem voluptatibus. Corrupti quos quaerat laudantium earum ab explicabo iste cumque tempora doloribus voluptatum pariatur nam, minima aliquam exercitationem sequi.
    //       Odio, quos sapiente totam minima iusto delectus. Eum iure aliquam earum sit sapiente nesciunt molestias aut, eligendi quam enim rem corporis eius dignissimos ducimus ipsum, laudantium suscipit veritatis voluptatum officia?
    //       Voluptatem nobis quibusdam natus officia, cumque ratione doloribus nemo vero repellendus alias amet et qui voluptatum perferendis ipsam culpa at laudantium fuga totam. Quaerat veritatis alias, incidunt ipsa laborum commodi!
    //       Esse cum assumenda molestiae, dolores alias officia deserunt natus minus enim animi aliquid aperiam facilis suscipit delectus maxime mollitia. Quas reprehenderit quo odit deserunt quam cupiditate tenetur, ad quaerat sit?
    //       Suscipit enim, sint numquam et odio deleniti saepe ab quasi, repudiandae id distinctio laudantium autem perspiciatis voluptas placeat quas asperiores architecto ipsum. Quis necessitatibus ratione doloremque deleniti dicta esse reiciendis.
    //       Saepe quasi molestias reiciendis asperiores culpa nobis velit suscipit, minus eaque at magnam cum mollitia modi labore minima ex accusamus quibusdam a sequi rem debitis est quo. Tenetur, inventore ab.
    //       Officia, magni quidem. Distinctio, libero reiciendis atque aspernatur fugiat harum dolore enim officiis maiores quisquam quaerat earum voluptates iusto beatae non illum sapiente, nihil similique culpa, adipisci eos architecto explicabo.
    //       Ipsum hic adipisci quisquam omnis ducimus excepturi, laudantium, facilis esse consequuntur, perferendis deleniti architecto. Est ut perferendis sed, officia nemo libero voluptates repellat quae esse, nisi ratione quisquam facilis vitae!
    //       Impedit voluptas sed ab mollitia! Unde error excepturi, dolorum consequuntur dolores quaerat quod ducimus enim? Accusantium, ipsa placeat delectus, architecto nostrum magni quo inventore blanditiis deleniti earum saepe, assumenda nemo.
    //       Commodi, reprehenderit temporibus assumenda est harum modi. Voluptatem doloremque ipsum ex expedita dolores reiciendis, qui, at blanditiis eius id vitae labore molestias exercitationem ullam consequuntur aspernatur in architecto! Nesciunt, dignissimos.
    //       Enim excepturi, vitae earum sunt voluptates odio aliquid dicta? Iure veritatis quam id provident repudiandae sed ex esse, corporis error aspernatur eius dicta quasi itaque eveniet officiis adipisci fuga hic?
    //       Eos ipsa iste repellendus, eius quia aliquam exercitationem laboriosam eaque libero possimus atque dicta quaerat fuga iure sed ab doloremque, incidunt aut consequatur voluptas modi odit. Impedit eveniet distinctio dicta.
    //       Quos, aliquam neque labore quibusdam repudiandae optio exercitationem veritatis maiores sit ab, in libero eaque iure ex culpa quam magnam iste! Nihil incidunt ratione quasi ex consequuntur molestiae repellat! Soluta.
    //       Repudiandae, tenetur perferendis at tempore voluptatum minima, quisquam facere neque praesentium totam, officiis nihil? Excepturi modi libero hic vero maxime consequuntur totam quasi! Nostrum odit deserunt doloribus libero nam voluptates!
    //       Dolorum neque non expedita porro error. Voluptates aspernatur quasi inventore illo! Alias, nostrum, debitis, aliquam corrupti suscipit reprehenderit repellat architecto facilis ipsa facere hic harum sint aspernatur consectetur provident quod?
    //       Perspiciatis, dolorem excepturi? Voluptatum, vero commodi non odit fugit consequatur reprehenderit facilis similique nulla modi hic facere sint incidunt, dolore at dolor, iusto maiores praesentium totam esse voluptatibus soluta quibusdam?
    //       Ab eligendi corrupti optio, assumenda voluptatem quam inventore delectus. Eos ipsa libero consectetur magni quam, consequatur maxime explicabo dolorum esse obcaecati odit tempore qui dicta necessitatibus nobis. Laudantium, asperiores dolores.
    //       Explicabo ducimus, aliquam expedita doloremque quaerat ipsum sunt at voluptatum quos porro optio rem esse id voluptatem vel tenetur mollitia, quidem incidunt. Id dolorum distinctio alias tenetur et optio eligendi.
    //       Facilis accusantium, consequatur voluptates, ea nemo sit ad ab temporibus voluptatem eaque fugiat corporis, mollitia quo soluta fuga cum blanditiis pariatur? Velit repellat deserunt tenetur optio quo. Repudiandae, quod quos!
    //       Voluptate facilis a culpa autem provident ad unde ab perferendis, explicabo laborum recusandae sequi aspernatur vero ducimus et fuga alias blanditiis laboriosam molestiae. Laudantium eius non hic architecto est ducimus.
    //       Sint, ipsam? Ut consequuntur non ducimus labore nulla? Magni praesentium error amet aliquid et illum dolorum, doloremque mollitia veritatis alias accusamus libero quae magnam quisquam odit harum eligendi quidem in?
    //       Mollitia consectetur, quis fugit vel recusandae quibusdam rem. Corrupti doloribus vero laboriosam, adipisci corporis ullam, voluptatem totam accusamus officia animi pariatur labore maiores similique beatae ipsam culpa suscipit eum porro.
    //       Soluta itaque id qui adipisci facilis ad quas quasi laborum beatae, eligendi neque sunt eum omnis quis laboriosam odio vero, ratione laudantium hic. Temporibus voluptatum eos id, eum eligendi voluptatibus?
    //       Accusamus deleniti pariatur facere molestias error autem, quas voluptas ratione illum asperiores exercitationem dolores consequatur enim provident, assumenda vitae optio tempore, ad sapiente deserunt temporibus inventore quidem iste? Atque, dolorem.
    //       Reiciendis expedita quae veniam id delectus provident inventore accusantium quia, porro quas. Esse asperiores libero animi nam corrupti nulla, voluptatibus debitis cupiditate velit possimus dolorem explicabo beatae commodi voluptatem quibusdam!
    //       Voluptatibus temporibus officiis nobis distinctio tenetur id alias nulla maxime voluptate perspiciatis odit impedit saepe porro accusamus autem sed reprehenderit totam beatae quam quaerat sint, laborum fugit! Debitis, fuga corrupti?
    //       Dignissimos facilis ex magnam harum quod esse minus tempore fugiat distinctio vel, incidunt necessitatibus exercitationem sint minima tenetur cupiditate voluptatem. Excepturi corporis eum dolores dignissimos cumque numquam. Praesentium, libero quaerat.
    //       Similique esse expedita cumque dolore error, incidunt eaque ducimus sunt accusamus nulla odit facere numquam rem dolorum voluptates nesciunt. Porro magnam architecto nihil quod, reprehenderit vel repellendus rem ipsum voluptate?
    //       Nesciunt earum, voluptatibus voluptas id cupiditate deserunt et dolorem, esse repellat eligendi, autem ducimus tempore ab veritatis aspernatur deleniti recusandae maiores possimus voluptates! Provident cum doloremque expedita atque eius accusantium?
    //       Quis odio repellat, illo voluptates consequatur aperiam eius dignissimos dolore, nemo velit ipsam explicabo accusantium reiciendis quibusdam. Animi ad necessitatibus tempore eveniet tenetur dolorem! Laborum labore dolores saepe itaque perspiciatis.
    //       Deserunt natus nemo asperiores mollitia quod rem praesentium expedita sint, minus earum omnis non voluptatum accusantium pariatur ex. Aut voluptates doloribus delectus adipisci non nihil nesciunt quasi in reiciendis omnis.
    //       Dolore aperiam reprehenderit ullam possimus dicta. Et maiores minima adipisci cupiditate. Tempore maxime sapiente quisquam sequi fuga totam porro incidunt corporis. Veniam doloremque tempore doloribus magnam dolor blanditiis? Impedit, voluptatibus.
    //       Dolores rerum repellendus qui, commodi veniam eveniet laborum illum quod praesentium nesciunt numquam architecto reiciendis. Aut veritatis maiores perferendis, ut odit amet sint esse laboriosam quia deleniti itaque ipsum molestiae?
    //       Reprehenderit voluptatem ipsum suscipit deleniti, obcaecati officiis dolore cum officia delectus, error id illum unde quidem vero rem voluptates nobis in porro eveniet facilis, nesciunt voluptatibus soluta rerum eius! Error!
    //       Atque, fugiat. Corrupti ratione placeat sequi exercitationem, laborum suscipit sapiente non, mollitia accusantium nihil consequuntur ullam nam eum, ab possimus a iste impedit? Labore iure id, perspiciatis quod numquam repellat.
    //       Repellendus molestias deleniti voluptatem ratione, magni et beatae excepturi autem distinctio ipsa, tempore nobis impedit omnis, aperiam consectetur placeat odio possimus! Odio ipsum eos nihil eius ex quibusdam illum maiores.
    //       Quod maiores labore amet, animi provident praesentium eius at laborum ratione ea suscipit modi quidem error sed ab nulla? Voluptate illo eos similique officia aut excepturi eius porro cupiditate ab.
    //       Eum quas ratione tempore in! Natus corrupti eligendi pariatur obcaecati beatae qui porro enim nobis. Accusantium molestiae in excepturi! Aperiam repudiandae assumenda atque tempora, tempore beatae cumque quasi quas illum?
    //       Atque labore nemo mollitia eveniet repudiandae voluptatibus corrupti laudantium in magni nobis sapiente quas, cumque nostrum excepturi cum similique suscipit veritatis voluptatem. Amet, nam? Soluta molestiae distinctio enim ex accusantium.
    //     </div> */}
    //     {/* <button onClick={scrollToBottom} className='scroll-button'>Scroll to bottom</button> */}
    //     <button onClick={callAPI}>Call API AGAIN</button>
    //  </div>
    // </>
    <>
      <div id='1'></div>
      <div id='2'></div>
    </>
  )
}

export default App
