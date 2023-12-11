class Projeto:
    def __init__(self, id, inicio, fim, lucro):
        self.id = id
        self.inicio = inicio
        self.fim = fim
        self.lucro = lucro

    def lucro_por_dia(self):
        return self.lucro / (self.fim - self.inicio)

def selecionarProjetos(listaProjetos):
    listaProjetos.sort(key=lambda x: x.lucro_por_dia(), reverse=True)
    
    projetosSelecionados = []
    projetosRecusados = []
    ultimoFim = -1

    for projeto in listaProjetos:
        if projeto.inicio >= ultimoFim:
            projetosSelecionados.append(projeto)
            ultimoFim = projeto.fim
        else:
            projetosRecusados.append(projeto)

    return projetosSelecionados, projetosRecusados

projetos = [Projeto(1, 10, 12, 500), Projeto(2, 11, 14, 500), Projeto(3, 15, 17, 400)]
projetosSelecionados, projetosRecusados = selecionarProjetos(projetos)

print("Projetos selecionados:")
for p in projetosSelecionados:
    print(f"Projeto {p.id}: Início: {p.inicio}, Fim: {p.fim}, Lucro: {p.lucro}")

print("\nProjetos recusados:")
for p in projetosRecusados:
    print(f"Projeto {p.id}: Início: {p.inicio}, Fim: {p.fim}, Lucro: {p.lucro}")