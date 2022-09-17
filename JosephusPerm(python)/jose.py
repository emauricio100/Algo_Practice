def josephus(items,k):
    index = 0
    jose = []
    while(len(items) != 0):
        index = (index + k-1) % len(items)
        jose.append(items[index])
        items.pop(index)
    return jose