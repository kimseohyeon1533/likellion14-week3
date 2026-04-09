return (
    <Container>
        <Title>MemoList</Title>
        <MemoInsert onInsert={handleInsert} />

        <MemoList
        memos={memos}
        onRemove={handleRemove}
        />

    </Container>
);
}

export default App;