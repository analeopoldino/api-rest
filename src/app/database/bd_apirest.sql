-- Cria a tabela apenas se não existir
CREATE TABLE IF NOT EXISTS livros (
  id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  ano VARCHAR(4) NOT NULL,
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

-- Insere os dados na tabela
INSERT INTO livros (titulo, autor, ano) VALUES
('1984', 'George Orwell', '1949'),
('Dom Quixote', 'Miguel de Cervantes', '1605'),
('Moby Dick', 'Herman Melville', '1851'),
('O Grande Gatsby', 'F. Scott Fitzgerald', '1925'),
('A Revolução dos Bichos', 'George Orwell', '1945'),
('O Sol é para Todos', 'Harper Lee', '1960'),
('A Biblioteca da Meia-Noite', 'Matt Haig', '2021'),
('Dom Casmurro', 'Machado de Assis', '1899');
