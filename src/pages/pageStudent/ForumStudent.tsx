import React, { useEffect, useState } from 'react';
import { Card, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import forumData from '../../assets/data-teste/forumData.json'; // Importar o arquivo JSON

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  comments: CommentForum[];
}

interface CommentForum {
  id: number;
  content: string;
  author: string;
  date: string;
}

const ForumStudent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    // Carregar os dados do JSON
    setPosts(forumData as Post[]);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filterText.toLowerCase()) ||
    post.content.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fórum - Estudante</h2>

      {/* Filtro de Perguntas */}
      <Row gutter={16} style={{ marginBottom: '20px' }}>
        <Col span={18}>
          <Input
            placeholder="Filtrar Pergunta"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </Col>
        <Col span={6}>
          <Link to="/student/forum/add" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
            <Button type="primary" style={{ backgroundColor: '#add8e6', color: '#000', borderColor: '#add8e6' }}>
              Add Pergunta
            </Button>
          </Link>
        </Col>
      </Row>

      <Row gutter={16}>
        {filteredPosts.map((post) => (
          <Col span={8} key={post.id} style={{ marginBottom: '20px' }}>
            <Card title={post.title} style={{ borderRadius: '8px' }}>
              <p>
                <strong>Autor:</strong> {post.author} | <strong>Data:</strong> {post.date}
              </p>
              <p>{post.content}</p>
              <Link to={`/student/forum/${post.id}`}>
                <Button style={{ backgroundColor: '#add8e6', color: '#000', borderColor: '#add8e6' }}>
                  Ver Comentários
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ForumStudent;
