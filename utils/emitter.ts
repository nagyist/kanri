import mitt from 'mitt';
import { Board, Card } from '~/types/kanban-types';

type Events = {
    createBoard: string;
    updateColors: void;

    enableColumnCardAddMode: string;
    enableColumnTitleEditing: string;

    openKanbanModal: {index: number, el: Card};
    openKanbanPage: void;
    openBoardDeleteModal: { index: number, description: string };
    openBoardRenameModal: { index: number, board: Board };

    closeKanbanPage: void;
    resetColumnInputs: void;
    columnActionDone: void;

    zIndexBack: void;
    zIndexDown: void;
};

const emitter = mitt<Events>();

export default emitter;