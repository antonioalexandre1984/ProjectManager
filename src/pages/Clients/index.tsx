import { useCallback, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Store } from 'react-notifications-component';
import { UseUser } from '../../components/hooks/UseUser';
import { IClient } from '../../components/Interfaces/Client';
import { api } from '../../services/api';
import { PageHeader } from './components/Header';
import { ClientsPageContainer, TableContainer, ActionsContainer, ActionsButton } from './styles';

export function ClientsPage() {
  const { token } = UseUser();
  const [clients, setClients] = useState<IClient[]>([]);

  const loadClients = useCallback(async () => {
    console.log('loadClients');
    try {
      const Authorization = `Bearer ${token}`;
      const res = await api.get('/clients', {
        headers: { Authorization }
      })
      console.log(res.data);
      setClients(res.data);
    } catch (e) {
      Store.addNotification({
        title: "Error!",
        message: "Failed to list user!",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  }, []);

  useEffect(() => {
    loadClients();
  }, [loadClients]);

  return (
    <ClientsPageContainer>
      {/*     <h2>Clients</h2> */}
      <PageHeader
        title="Clients"
        action={() => console.log('Clients')}
        buttonText="New Client"
      />
      <TableContainer>
        <thead>
          <tr>
            <th>name</th>
            <th>Email</th>
            <th>telephone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map(client => (
              <tr key={client?.id}>
                <td>{client?.name}</td>
                <td>{client?.email}</td>
                <td>{client?.telephone}</td>
                <td>
                  <ActionsContainer>
                    <ActionsButton color="#1565c0"><FaEdit /></ActionsButton>
                    <ActionsButton color="#c62828"><FaTrash /></ActionsButton>
                  </ActionsContainer>
                </td>
              </tr>
            ))
          }
        </tbody>
      </TableContainer>

    </ClientsPageContainer>
  );
}
