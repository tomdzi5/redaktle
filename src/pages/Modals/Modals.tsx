import { ModalTypes } from '../../types/modal';
import AppModal from '../../components/AppModal/AppModal';

type PropsType = {
    onClose: (event: {}, aligment: ModalTypes) => void;
    type: ModalTypes;
};

const Modals = (props: PropsType) => {
    const { onClose, type } = props;

    return (
        <>
            <AppModal
                title="Info"
                onClose={onClose}
                open={type === 'Info' ? true : false}
            >
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis beatae sunt accusamus qui aperiam, nobis quas
                    repellendus quam hic atque, animi eveniet iste, id nemo
                    totam nostrum? Ipsam, consequatur quisquam? Officiis maxime
                    eveniet placeat inventore nisi, rerum error veritatis
                    repellendus beatae! Rem a assumenda ipsum nobis eaque
                    veniam, ut praesentium! Placeat accusantium voluptates
                    praesentium animi corrupti enim amet recusandae nobis? Totam
                    nam laudantium vel. Facilis culpa voluptate possimus eum
                    ipsum mollitia veniam voluptas optio ducimus magnam dolor
                    sequi voluptates ad id quis soluta magni ipsa, debitis aut!
                    Pariatur, eos sequi. Quia nam asperiores assumenda officia
                    debitis facilis impedit, consequatur iste atque cumque
                    accusantium rerum vitae, iure sapiente, sint corrupti
                    architecto sequi et aliquid! Maxime minima inventore, sed
                    officia enim qui. Atque itaque ab dicta vitae tenetur
                    soluta, velit dolores esse, fuga laborum tempora natus.
                    Reiciendis consequatur obcaecati sunt mollitia similique,
                    iste in saepe harum expedita dolor quod ad iusto dolores.
                    Ducimus cumque expedita optio saepe quasi quas ullam libero
                    itaque, voluptates, eaque dolores rerum debitis. Rem ea
                    libero quia! Asperiores ullam rem culpa ad nobis
                    voluptatibus pariatur minus dolore magnam. A praesentium
                    distinctio quo, dignissimos eius rerum. Omnis obcaecati
                    facilis, molestiae quod nihil dolorem fugiat eaque tenetur
                    error. Saepe velit ratione veniam animi facere enim? Ad
                    porro aspernatur perferendis atque! Deserunt sequi quae
                    velit sit harum praesentium facilis molestiae, veritatis
                    porro expedita impedit? Consectetur, soluta! Quidem, amet
                    voluptatem. Voluptatibus tempora ut sequi cum ratione dolore
                    accusamus repellat in tempore ab! Debitis, modi unde! Ab ex
                    facere aliquid! Et, aliquid sapiente pariatur illo minus
                    dignissimos aut sint tempora quos sunt, eaque corrupti
                    architecto dolore cupiditate veniam dolor aperiam. Nulla,
                    quisquam illum. Rerum inventore voluptas, obcaecati
                    provident unde sed ipsam voluptate tempora deserunt odio
                    accusamus ipsum labore laborum ullam ex, culpa sunt eum
                    dolore, nihil rem adipisci qui. Sapiente porro iure
                    provident.
                </p>
            </AppModal>
            <AppModal
                title="Stats"
                onClose={onClose}
                open={type === 'Stats' ? true : false}
            >
                <p>Stats modal text</p>
            </AppModal>
            <AppModal
                title="Settings"
                onClose={onClose}
                open={type === 'Settings' ? true : false}
            >
                <p>Settings modal text</p>
            </AppModal>
        </>
    );
};

export default Modals;
