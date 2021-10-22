export type boardType = {
    type: string
    payload: {
      title: string,
      name: string,
      comment: string
    },
    id: number
}

export type boardData = {
    title: string;
    name: string;
    comment: string;
}

export type boardState = {
    loading: boolean,
    data: boardData[]
    error: any;
}