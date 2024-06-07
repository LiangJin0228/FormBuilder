export const fakeData = {
    title: "Test",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. In iaculis nunc sed augue. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Ut sem nulla pharetra diam sit amet nisl suscipit. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Ut sem nulla pharetra diam sit. Tortor aliquam nulla facilisi cras. Et egestas quis ipsum suspendisse. Sagittis orci a scelerisque purus semper. Tortor vitae purus faucibus ornare suspendisse sed. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Duis ultricies lacus sed turpis tincidunt id. Amet consectetur adipiscing elit ut aliquam purus. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Curabitur vitae nunc sed velit dignissim sodales ut. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Mauris sit amet massa vitae tortor condimentum lacinia.Amet consectetur adipiscing elit duis tristique.Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper.Nunc sed id semper risus in hendrerit gravida rutrum quisque.Adipiscing bibendum est ultricies integer.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.Netus et malesuada fames ac turpis egestas maecenas pharetra.Facilisis volutpat est velit egestas dui id.Porttitor rhoncus dolor purus non enim praesent elementum facilisis.Cum sociis natoque penatibus et magnis dis parturient montes.Vitae elementum curabitur vitae nunc sed velit dignissim.Turpis egestas sed tempus urna et pharetra pharetra massa massa.Tempor orci dapibus ultrices in iaculis.",
    nodes: [
        {
            id: 1,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 1,
            order_number: 1,
            title: "您每週實際授課多少節？（含超鐘點節數，但不含額外授課節數，非以節計算者，一小時視為一節）",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: null,
            config: {
                required: true,
                scale: [
                    { id: 1, title: "非常不滿意", value: 1 },
                    { id: 2, title: "不滿意", value: 2 },
                    { id: 3, title: "普通", value: 3 },
                    { id: 4, title: "滿意", value: 4 },
                    { id: 5, title: "非常滿意", value: 5 },
                ],
            },
            options: [
                {
                    id: 1,
                    title: "選項1",
                    description: "選項1描述",
                    value: "one",
                },
                {
                    id: 2,
                    title: "選項2",
                    description: "選項2描述",
                    value: "two",
                },
            ],
        },
        {
            id: 2,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 2,
            order_number: 2,
            title: "下列對於公費生制度的說明，您同意程度如何？",
            image: null,
            config: {
                required: true,
                scale: [
                    { id: 1, title: "非常不滿意", value: 1 },
                    { id: 2, title: "不滿意", value: 2 },
                    { id: 3, title: "普通", value: 3 },
                    { id: 4, title: "滿意", value: 4 },
                    { id: 5, title: "非常滿意", value: 5 },
                ],
            },
            options: [
                {
                    id: 1,
                    title: "您是否對於教學評量成績感到滿意",
                    description: "選項1描述",
                },
                {
                    id: 2,
                    title: "師資培育大學能提供公費生良好的學習輔導與支持",
                    description: "選項2描述",
                },
                {
                    id: 3,
                    title: "達成公費生各項要求，時程很趕，時間壓力很大",
                    description: "選項2描述",
                },
            ],
        },
        {
            id: 3,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 3,
            order_number: 3,
            title: "您對師資培育大學辦理師資培育有何意見與建議？有沒有哪些課程是您認為師資培育課程應教而未教的？(500字以內)",
            image: null,
            config: {},
            options: [],
        },
        {
            id: 4,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 4,
            order_number: 4,
            title: "下列對於公費生制度的說明，您同意程度如何？",
            image: null,
            config: {
                required: true,
            },
            options: [
                {
                    id: 1,
                    title: "選項1",
                    description: "選項1描述",
                    value: "one",
                },
                {
                    id: 2,
                    title: "選項2",
                    description: "選項2描述",
                    value: "two",
                },
            ],
        },
        {
            id: 5,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 5,
            order_number: 5,
            title: "下列對於公費生制度的說明，您同意程度如何？",
            image: null,
            config: {
                required: true,
                scale: [
                    { id: 1, title: "非常不滿意", value: 1 },
                    { id: 2, title: "不滿意", value: 2 },
                    { id: 3, title: "普通", value: 3 },
                    { id: 4, title: "滿意", value: 4 },
                    { id: 5, title: "非常滿意", value: 5 },
                ],
            },
            options: [
                {
                    id: 1,
                    title: "您是否對於教學評量成績感到滿意",
                    description: "選項1描述",
                },
                {
                    id: 2,
                    title: "師資培育大學能提供公費生良好的學習輔導與支持",
                    description: "選項2描述",
                },
                {
                    id: 3,
                    title: "達成公費生各項要求，時程很趕，時間壓力很大",
                    description: "選項2描述",
                },
            ],
        },
        {
            id: 6,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 6,
            order_number: 6,
            title: "下列對於公費生制度的說明，您同意程度如何？",
            image: null,
            config: {
                required: true,
            },
            options: [],
        },
        {
            id: 7,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 7,
            order_number: 7,
            title: "Nested Section",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: null,
            config: {
                required: true,
            },
            options: [],
            nodes: [
                {
                    id: 8,
                    parent_id: 1,
                    parent_type: "AppModelsNode",
                    type_id: 5,
                    order_number: 1,
                    title: "下列對於公費生制度的說明，您同意程度如何？",
                    image: null,
                    config: {
                        required: true,
                    },
                    options: [
                        {
                            id: 1,
                            title: "您是否對於教學評量成績感到滿意",
                            description: "選項1描述",
                        },
                        {
                            id: 2,
                            title: "師資培育大學能提供公費生良好的學習輔導與支持",
                            description: "選項2描述",
                        },
                        {
                            id: 3,
                            title: "達成公費生各項要求，時程很趕，時間壓力很大",
                            description: "選項2描述",
                        },
                    ],
                    nodes: [
                        {
                            id: 9,
                            parent_id: 1,
                            parent_type: "AppModelsNode",
                            type_id: 5,
                            order_number: 1,
                            title: "下列對於公費生制度的說明，您同意程度如何？",
                            image: null,
                            config: {
                                required: true,
                            },
                            options: [
                                {
                                    id: 1,
                                    title: "您是否對於教學評量成績感到滿意",
                                    description: "選項1描述",
                                },
                                {
                                    id: 2,
                                    title: "師資培育大學能提供公費生良好的學習輔導與支持",
                                    description: "選項2描述",
                                },
                                {
                                    id: 3,
                                    title: "達成公費生各項要求，時程很趕，時間壓力很大",
                                    description: "選項2描述",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 9,
            parent_id: 1,
            parent_type: "App\\Models\\Form",
            type_id: 7,
            order_number: 8,
            title: "",
            description: "",
            image: null,
            config: {
                required: true,
            },
            options: [],
            nodes: [
                {
                    id: 10,
                    parent_id: 1,
                    parent_type: "AppModelsNode",
                    type_id: 5,
                    order_number: 1,
                    title: "下列對於公費生制度的說明，您同意程度如何？",
                    image: null,
                    config: {
                        required: true,
                    },
                    options: [
                        {
                            id: 1,
                            title: "您是否對於教學評量成績感到滿意",
                            description: "選項1描述",
                        },
                        {
                            id: 2,
                            title: "師資培育大學能提供公費生良好的學習輔導與支持",
                            description: "選項2描述",
                        },
                        {
                            id: 3,
                            title: "達成公費生各項要求，時程很趕，時間壓力很大",
                            description: "選項2描述",
                        },
                    ],
                    nodes: [
                        {
                            id: 11,
                            parent_id: 1,
                            parent_type: "AppModelsNode",
                            type_id: 5,
                            order_number: 1,
                            title: "下列對於公費生制度的說明，您同意程度如何？",
                            image: null,
                            config: {
                                required: true,
                            },
                            options: [
                                {
                                    id: 1,
                                    title: "您是否對於教學評量成績感到滿意",
                                    description: "選項1描述",
                                },
                                {
                                    id: 2,
                                    title: "師資培育大學能提供公費生良好的學習輔導與支持",
                                    description: "選項2描述",
                                },
                                {
                                    id: 3,
                                    title: "達成公費生各項要求，時程很趕，時間壓力很大",
                                    description: "選項2描述",
                                },
                            ],
                            nodes: [
                                {
                                    id: 11,
                                    parent_id: 1,
                                    parent_type: "AppModelsNode",
                                    type_id: 5,
                                    order_number: 1,
                                    title: "下列對於公費生制度的說明，您同意程度如何？",
                                    image: null,
                                    config: {
                                        required: true,
                                    },
                                    options: [
                                        {
                                            id: 1,
                                            title: "您是否對於教學評量成績感到滿意",
                                            description: "選項1描述",
                                        },
                                        {
                                            id: 2,
                                            title: "師資培育大學能提供公費生良好的學習輔導與支持",
                                            description: "選項2描述",
                                        },
                                        {
                                            id: 3,
                                            title: "達成公費生各項要求，時程很趕，時間壓力很大",
                                            description: "選項2描述",
                                        },
                                    ],
                                },
                                {
                                    id: 12,
                                    parent_id: 1,
                                    parent_type: "AppModelsNode",
                                    type_id: 5,
                                    order_number: 2,
                                    title: "下列對於公費生制度的說明，您同意程度如何？",
                                    image: null,
                                    config: {
                                        required: true,
                                    },
                                    options: [
                                        {
                                            id: 1,
                                            title: "您是否對於教學評量成績感到滿意",
                                            description: "選項1描述",
                                        },
                                        {
                                            id: 2,
                                            title: "師資培育大學能提供公費生良好的學習輔導與支持",
                                            description: "選項2描述",
                                        },
                                        {
                                            id: 3,
                                            title: "達成公費生各項要求，時程很趕，時間壓力很大",
                                            description: "選項2描述",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 12,
                            parent_id: 1,
                            parent_type: "AppModelsNode",
                            type_id: 5,
                            order_number: 2,
                            title: "下列對於公費生制度的說明，您同意程度如何？",
                            image: null,
                            config: {
                                required: true,
                            },
                            options: [
                                {
                                    id: 1,
                                    title: "您是否對於教學評量成績感到滿意",
                                    description: "選項1描述",
                                },
                                {
                                    id: 2,
                                    title: "師資培育大學能提供公費生良好的學習輔導與支持",
                                    description: "選項2描述",
                                },
                                {
                                    id: 3,
                                    title: "達成公費生各項要求，時程很趕，時間壓力很大",
                                    description: "選項2描述",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
